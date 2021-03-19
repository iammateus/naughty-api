const express = require("express");
const app = express();
const port = 3000;

const delay = (ms) => {
    return new Promise((res) => setTimeout(res, ms));
};

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
};

app.get("/", async (req, res) => {
    const possibleStatus = [200, 404, 500];
    const status = possibleStatus[getRandomInt(0, 3)];
    await delay(3000);
    res.status(status).json({
        message: "I'm naughty",
        status,
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});