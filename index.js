const express = require("express");
const fs = require("fs");

let secretNumber = Math.round(Math.random() * 100);

const app = express();

app.get("/favicon.ico", (req, res) => {
    res.end(fs.readFileSync("favicon (1).ico"));
})

app.get("/VerificareNumarulSecret", (req, res) => {
    let number = req.query.number
    if (secretNumber > number) {
        res.end("too small");
    }
    else if (secretNumber < number) {
        res.end("too big");
    }
    else if (secretNumber == number) {
        res.end("gg!!");
    }
})

app.get("/", (req, res) => {
    res.end(fs.readFileSync("index.html"));
})


app.listen(2222, () => {
    console.log("Server is up.");
})