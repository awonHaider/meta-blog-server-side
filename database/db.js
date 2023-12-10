// Importing Mongoose library for MongoDB
import mongoose from "mongoose";

// Function to establish connection with MongoDB
const Connection = async () => {
    // MongoDB connection URL
    const URL = "mongodb+srv://awonawan5:EHnjatBKLaufKf6j@cluster0.2pqzw4b.mongodb.net/meta_blog?retryWrites=true&w=majority";

    try {
        // Attempt to connect to MongoDB using Mongoose
        await mongoose.connect(URL, { useNewUrlParser: true });
        console.log("Database Connected Successfully");
    } catch (error) {
        // If connection fails, handle the error
        console.log("Error Occurred", error);
    }
}

// Allowing the Connection function to be accessible outside this module
export default Connection;
