import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
        console.log(`\n MongoDB connected successfully !! Host: ${connectionInstance.connection.host} `);
    }catch (error) {
        console.log("Error in mongoDB connection", error);
        process.exit(1);
    }
}

export default connectDB;