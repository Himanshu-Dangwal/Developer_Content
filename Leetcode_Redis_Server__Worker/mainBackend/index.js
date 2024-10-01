const express = require("express")
const { createClient } = require("redis");

const app = express();
app.use(express.json());
const client = createClient();

app.post("/submit", async (req, res) => {
    const problemId = req.body.problemId;
    const code = req.body.code;
    const language = req.body.language;

    try {
        await client.lPush("submissionQueue", JSON.stringify({ code, language, problemId }));
        console.log("Submission Processed");
        res.status(200).send("Submission received and stored.");
    } catch (error) {
        console.error("Redis error:", error);
        res.status(500).send("Failed to store submission.");
    }
})

async function startServer() {
    await client.connect();
    console.log("Connected to the client");
    app.listen(8080, (req, res) => {
        console.log("Server Started at port 8080");
    })
}

startServer();

