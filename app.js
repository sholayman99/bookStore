/*
* Author : Md. Sholayman
* Description: This is the file where all the config of the project are being hold.
* Date: 15 December  2023.
* */

const express = require('express');
const app = new express();

//routes
const router = require("./src/routes/api");

//database
const mongoose = require("mongoose");


//importing security middleware
require("dotenv").config()
const path = require("path");
const cors = require("cors");
const hpp = require("hpp");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
    standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
    // store: ... , // Use an external store for consistency across multiple server instances.
});


//implementing middlewares
app.use(express.json());
app.use(cors());
app.use(hpp());
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());
app.use(limiter);

//connection with router
app.use("/api/v1" , router);


//MongoDB database connection

async function connectToMongoDB() {
    try {
        const uri = "mongodb://0.0.0.0:27017/bookStore";
        const OPTIONS = { user: "", pass: "" };
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");

        // Perform database operations here
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

// Call the async function to connect to MongoDB
connectToMongoDB();




app.use(express.static("client/dist"));

//implementation if undefined route
app.use("*", (req, res) => {
    res.sendFile(path.resolve(__dirname,"client","dist","index.html"))
});


module.exports = app ;
