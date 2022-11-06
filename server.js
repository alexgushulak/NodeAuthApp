require('dotenv').config({path: "./config.env"});

// create express app
const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

// listen for requests
app.listen(PORT, () => {
    console.log("Server is listening on port 3000");
    }
);

