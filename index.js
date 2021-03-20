const express = require("express");
const app = express();
const port = 3000;
const http = require("http")

const delay = (ms) => {
    return new Promise((res) => setTimeout(res, ms));
};

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
};

app.get("/", async (req, res) => {
    const possibleStatusCodes = Object.keys(http.STATUS_CODES)
    const statusCode = possibleStatusCodes[getRandomInt(0, possibleStatusCodes.length)]
    const statusMessage = http.STATUS_CODES[statusCode]
    console.log({statusCode,statusMessage})
    res.status(statusCode).json({
        message: "I'm naughty",
        statusMessage
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
