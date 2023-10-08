import mongoose, { mongo } from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection;

        connection.once("open", () => {
            console.log("MongoDB connected successfully");
        });

        connection.on("error", (err) => {
            console.log("MongoDB connection error. Please make sure MongoDB is running." + err);
            process.exit();
        });

    } catch (error) {
        console.log("Oh no, something went wrong! ", error);
    }


}