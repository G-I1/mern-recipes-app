import mongoose, { mongo } from "mongoose";

export const dbconnect = async (uri) => {
    try {
        await mongoose.connect(uri); 
        console.log("connected to database")
    } catch (error) {
        console.log("failed connection to database", error);
    }
}
