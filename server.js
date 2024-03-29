require("dotenv").config({path: "./config.env"});
const express = require("express");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
const cors = require("cors");


// Connect to the database
connectDB();


const app = express();  
app.use(cors());
app.use(express.json());
app.use('/api/v1/auth', require('./routes/auth'));
app.use('/api/v1/private', require('./routes/private'));
app.use('/api/v1/delete', require('./routes/delete'));
app.use('/api/v1/posts', require('./routes/posts'));
app.use(errorHandler);


const PORT = process.env.PORT || 5000;

// listen for requests
const server = app.listen(PORT, () => {console.log(`Server is listening on port ${PORT}`);});

process.on("unhandledRejection", (err, promise) => {
    console.log(`Logged Server Error: ${err}`);
    server.close(() => process.exit(1));
});