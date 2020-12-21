const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello");
})
const port = process.env.PORT || 3000;

app.listen(port, (req, res) => {
    console.log("app is listening");
})