require("dotenv").config();

const express = require("express");
const cohere = require("cohere-ai");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const client = new cohere.CohereClientV2({
    token: process.env.COHERE_API_KEY,
})


const estimateTokens = (text) =>{
    return Math.ceil(text.length / 4);
}

app.post("/translate", async (req, res) => {
    const { sourceLanguage, targetLanguage, userText, formality, to, context} = req.body;
    const estimatedTokens = estimateTokens(userText);
    const maxTokens = Math.min(estimatedTokens * 2, 2048);

    // const formedContext = [
    //     `formality: ${formality}`,
    //     context ? `Additional context: ${context}` : null,
    //     to ? `to: ${to}` : null,
    // ].filter(Boolean);

    const formedContext = [
        `formality: ${formality}`,
        `context: ${context}`,
        `to: ${to}`,
    ]

    try {
        const response = await client.chat({
            model: "command-r-08-2024",
            temperature: 0.3,
            max_tokens: maxTokens+3000,
            messages: [
                {
                    role: "user",
                    content: `Translate the following text from ${sourceLanguage} to ${targetLanguage}. Only provide the translated text without any additional comments or explanations: "${userText}"`,               
                }
            ],
            documents: formedContext,
        });

        const translatedText = response.message.content[0].text;
        res.json({translation: translatedText});
    } catch (error) {
        console.error("Error Translating Text: ", error);
        res.status(500).json({error: error});
    }
})


app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
})

