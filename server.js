
const express = require("express");
const dotenv = require("dotenv");
const { GoogleGenAI } = require("@google/genai");

dotenv.config();

const app = express();
const PORT = 3000;

// Check API key
if (!process.env.GEMINI_API_KEY) {
    console.error("GEMINI_API_KEY is missing from .env");
    process.exit(1);
}

// Connect to Gemini
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

// Middleware
app.use(express.json());
app.use(express.static(__dirname));

// ========================================
// GEMINI AI ASSISTANT
// ========================================

app.post("/api/chat", async (req, res) => {

    console.log("Chat request received:", req.body.question);

    try {
        const question = req.body.question;

        if (!question || typeof question !== "string" || question.trim() === "") {
            return res.status(400).json({
                error: "Please enter a question."
            });
        }

        let response;

        // Retry up to 3 times
        for (let attempt = 1; attempt <= 3; attempt++) {

            try {
                console.log(`Sending request to Gemini (attempt ${attempt})...`);

                response = await ai.models.generateContent({

                    model: "gemini-3.8-flash",

                    contents: `
You are the International Student Hub AI Assistant.

You help international students studying and living in South Korea.

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

Keep answers easy to understand for international students.

Do not pretend to be an official university,
government, hospital, bank, or immigration representative.

For important rules, laws, visa matters, or official
information, tell the student to check the appropriate
official source.

Student's question:
${question}
`
                });

                console.log("Gemini response received!");
                break;

            } catch (error) {

                console.error("Gemini attempt failed:", error.message);

                if (error.status !== 503 || attempt === 3) {
                    throw error;
                }

                console.log(`Gemini busy. Retrying (${attempt}/3)...`);

                await new Promise(resolve =>
                    setTimeout(resolve, 2000 * attempt)
                );
            }
        }

        if (!response || !response.text) {
            throw new Error("Gemini returned an empty response.");
        }

        // Send answer to frontend
        res.json({
            answer: response.text
        });

        console.log("Answer sent to frontend!");

    } catch (error) {

        console.error("GEMINI ERROR:", error);

        res.status(500).json({
            error: "Sorry, the AI Assistant could not respond. Please try again."
        });
    }
});

// ========================================
// START SERVER
// ========================================

app.listen(PORT, "0.0.0.0", () => {

    console.log(
        `International Student Hub running at http://localhost:${PORT}`
    );

});