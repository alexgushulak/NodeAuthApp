require("dotenv").config({path: "./config.env"});
const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");

// Connect to the database
connectDB();

const app = express();  
app.use(express.json());
app.use('/api/v1/auth', require('./routes/auth'));


const PORT = process.env.PORT || 5000;

// listen for requests
const server = app.listen(PORT, () => {console.log(`Server is listening on port ${PORT}`);});

process.on("unhandledRejection", (err, promise) => {
    console.log(`Logged Server Error: ${err}`);
    server.close(() => process.exit(1));
});