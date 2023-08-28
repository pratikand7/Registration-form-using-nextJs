const express = require("express");
const app = express();
let PORT = 3000;

const sendMail = require("./controllers/sendMail");

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/view/index.html");
});

app.get("/mail", sendMail);

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log("server is live");
        });
    } catch (error) {
        
    }
};

start();