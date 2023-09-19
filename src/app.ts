import dotenv from "dotenv";
import express from "express";
import { connectToDB } from "./db/connect";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const start = async () => {
    try {
        const mongoUri = process.env.MONGO_URI;
        if(!mongoUri){
            throw new Error("Mongo URI not found in .env file");
        }
        console.log("Connecting to database...");
        await connectToDB(mongoUri);
        console.log("Connected to database");
        console.log("Starting server...");
        app.listen(port, ()=> {
            console.log("Server is running on port")
        })

    } catch(e){
        console.log(e)

    }
};

start();