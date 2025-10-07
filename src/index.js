//require("dotenv").config({path: "./env"});   Method one to import

import dotenv from "dotenv";  // Method two to import

import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";
import connectDB from "./db/index.js"; 
import {app} from "./app.js";

dotenv.config({
    path: "./.env"
});


connectDB()

.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is listening on port ${process.env.PORT }`);
    }) 
    }
)
.catch((error) => {
    console.log("MONGO db connection failed !!!", error);
})





/*
import express from "express"
const app = express()
(async () => {
    try{
        await mongoose.connect(` $(process.env.MONGO_URL)/$(DB_NAME) `);
        app.on("error", (error) => {
            console.log("Error in DB connection", error);
            throw error;
        })

        app.listen(process.env.PORT,() => {
            console.log(`App is listening on port ${process.env.PORT}`)
        } )
    } catch (error){
        console.log("Error in DB connection", error);
        throw error;
    }
})()*/