
const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const { MongoStore } = require("connect-mongo");
const { GoogleGenAI } = require("@google/genai");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// ========================================
// ENVIRONMENT VARIABLES
// ========================================

if (!process.env.MONGODB_URI) {
    console.error("MONGODB_URI is missing.");
    process.exit(1);
}

if (!process.env.GEMINI_API_KEY) {
    console.error("GEMINI_API_KEY is missing.");
    process.exit(1);
}

if (!process.env.SESSION_SECRET) {
    console.error("SESSION_SECRET is missing.");
    process.exit(1);
}

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

// ========================================
// MIDDLEWARE
// ========================================

app.set("trust proxy", 1);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    name: "ish.sid",
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI,
        collectionName: "sessions"
    }),
    cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}));

// ========================================
// STUDENT MODEL
// ========================================

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 80
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    university: {
        type: String,
        required: true
    },

    passwordHash: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Student = mongoose.model("Student", studentSchema);

// ========================================
// AUTHENTICATION MIDDLEWARE
// ========================================

function requireAuth(req, res, next) {
    if (!req.session.studentId) {
        return res.redirect("/auth.html");
    }

    next();
}

// ========================================
// PAGE ROUTES
// ========================================

// Starting page
app.get("/", (req, res) => {
    if (req.session.studentId) {
        return res.redirect("/app.html");
    }

    res.sendFile(__dirname + "/auth.html");
});

// Login page
app.get("/auth.html", (req, res) => {
    if (req.session.studentId) {
        return res.redirect("/app.html");
    }

    res.sendFile(__dirname + "/auth.html");
});

// Protected homepage
app.get("/app.html", requireAuth, (req, res) => {
    res.sendFile(__dirname + "/app.html");
});

// Serve CSS and JavaScript files
app.use(express.static(__dirname, {
    index: false
}));

// ========================================
// REGISTER
// ========================================

app.post("/api/auth/register", async (req, res) => {
    try {
        const { name, email, university, password } = req.body;

        if (!name || !email || !university || !password) {
            return res.status(400).json({
                error: "Please complete all fields."
            });
        }

        const cleanName = name.trim();
        const cleanEmail = email.trim().toLowerCase();

        if (cleanName.length > 80) {
            return res.status(400).json({
                error: "Name is too long."
            });
        }

        if (password.length < 8) {
            return res.status(400).json({
                error: "Password must contain at least 8 characters."
            });
        }

        const validUniversities = [
            "Kyungsung University",
            "Pusan National University",
            "Dong-A University",
            "Other"
        ];

        if (!validUniversities.includes(university)) {
            return res.status(400).json({
                error: "Please select a valid university."
            });
        }

        const existingStudent = await Student.findOne({
            email: cleanEmail
        });

        if (existingStudent) {
            return res.status(409).json({
                error: "This email is already registered."
            });
        }

        const passwordHash = await bcrypt.hash(password, 12);

        const student = await Student.create({
            name: cleanName,
            email: cleanEmail,
            university,
            passwordHash
        });

        return res.status(201).json({
            message: "Account created successfully. You can now log in."
        });

    } catch (error) {
        console.error("Registration error:", error);

        if (error.code === 11000) {
            return res.status(409).json({
                error: "This email is already registered."
            });
        }

        res.status(500).json({
            error: "Registration failed. Please try again."
        });
    }
});

// ========================================
// LOGIN
// ========================================

app.post("/api/auth/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                error: "Please enter your email and password."
            });
        }

        const student = await Student.findOne({
            email: email.trim().toLowerCase()
        });

        if (!student) {
            return res.status(401).json({
                error: "Invalid email or password."
            });
        }

        const passwordMatch = await bcrypt.compare(
            password,
            student.passwordHash
        );

        if (!passwordMatch) {
            return res.status(401).json({
                error: "Invalid email or password."
            });
        }

        req.session.regenerate((error) => {
            if (error) {
                console.error("Session error:", error);

                return res.status(500).json({
                    error: "Login failed. Please try again."
                });
            }

            req.session.studentId = student._id.toString();

            req.session.save((saveError) => {
                if (saveError) {
                    console.error("Session save error:", saveError);

                    return res.status(500).json({
                        error: "Login failed. Please try again."
                    });
                }

                res.json({
                    message: "Login successful.",
                    student: {
                        name: student.name,
                        email: student.email,
                        university: student.university
                    }
                });
            });
        });

    } catch (error) {
        console.error("Login error:", error);

        res.status(500).json({
            error: "Login failed. Please try again."
        });
    }
});

// ========================================
// GET LOGGED-IN STUDENT
// ========================================

app.get("/api/auth/me", requireAuth, async (req, res) => {
    try {
        const student = await Student.findById(
            req.session.studentId
        ).select("name email university");

        if (!student) {
            req.session.destroy(() => { });

            return res.status(401).json({
                error: "Student account not found."
            });
        }

        res.json({
            student
        });

    } catch (error) {
        console.error("Student information error:", error);

        res.status(500).json({
            error: "Could not load student information."
        });
    }
});

// ========================================
// LOGOUT
// ========================================

app.post("/api/auth/logout", (req, res) => {
    req.session.destroy((error) => {
        if (error) {
            return res.status(500).json({
                error: "Logout failed."
            });
        }

        res.clearCookie("ish.sid", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax"
        });

        res.json({
            message: "Logged out successfully."
        });
    });
});

// ========================================
// GEMINI AI ASSISTANT
// ========================================

app.post("/api/chat", requireAuth, async (req, res) => {
    try {
        const question = req.body.question;

        if (
            !question ||
            typeof question !== "string" ||
            question.trim() === ""
        ) {
            return res.status(400).json({
                error: "Please enter a question."
            });
        }

        if (question.length > 2000) {
            return res.status(400).json({
                error: "Your question is too long."
            });
        }

        const response = await ai.models.generateContent({
            model: "gemini-3.8-flash",
            contents: `
You are the International Student Hub AI Assistant.

Help international students studying and living in South Korea.

Give simple, clear and practical answers.

You can help with:
- University
- Classes
- Professors
- Part-time work
- Housing
- Restaurants
- Hospitals
- Banks
- Transportation
- Korean language
- Everyday life in Korea

Do not pretend to be an official university,
government, hospital, bank, or immigration representative.

For important rules, laws, visa matters, or official
information, tell students to check the appropriate
official source.

Student's question:
${question.trim()}
`
        });

        if (!response || !response.text) {
            throw new Error("Gemini returned an empty response.");
        }

        res.json({
            answer: response.text
        });

    } catch (error) {
        console.error("Gemini error:", error);

        res.status(500).json({
            error: "Sorry, the AI Assistant could not respond. Please try again."
        });
    }
});

// ========================================
// START SERVER
// ========================================

async function startServer() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        console.log("MongoDB connected successfully!");

        app.listen(PORT, "0.0.0.0", () => {
            console.log(
                `International Student Hub running at http://localhost:${PORT}`
            );
        });

    } catch (error) {
        console.error("Server startup failed:", error);
        process.exit(1);
    }
}

startServer();
