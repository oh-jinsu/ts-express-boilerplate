import { config } from "dotenv";
import express from "express";

config();

const port = parseInt(process.env.PORT || "8080", 10);

const app = express();

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Hello world!",
    });
});

app.listen(port, () => {
    console.log(`> Server listening at http://localhost:${port} as ${process.env.NODE_ENV}`);
});
