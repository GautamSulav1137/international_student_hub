const express = require("express");
const dotenv = require("dotenv");
const { GoogleGenAI } = require("@google/genai");

dotenv.config();

const app = express();
const PORT = 3000;

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

app.use(express.json());
app.use(express.static(__dirname));


// ========================================
// GEMINI AI ASSISTANT
// ========================================

app.post("/api/chat", async (req, res) => {

    try {

        const question = req.body.question;

        if (!question || question.trim() === "") {

            return res.status(400).json({
                error: "Please enter a question."
            });

        }


        const response = await ai.models.generateContent({

            model: "gemini-3.8-flash",

            contents: `
You are the International Student Hub AI Assistant.

You help international students studying and
living in South Korea.

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


        res.json({
            answer: response.text
        });


    } catch (error) {

        console.error("GEMINI ERROR:", error);

        res.status(500).json({
            error: "Sorry, the AI Assistant could not respond."
        });

    }

});


app.listen(PORT, () => {

    console.log(
        `International Student Hub running at http://localhost:${PORT}`
    );

});