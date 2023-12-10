//mongoose is library that help you perform different kind of operations
//with mongoDB Database
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    //unique id for each object you save in mongodb is created automatically
    //so we dont create it manually
    firstname: {
        type: String,
        required: true,
    },

    lastname: {
        type: String,
        required: true,
    },
    //"description" is field of schema
    email: {
    //below is validation
        type: String,
        required: true,
        unique: true
    },
    
    //"description" is field of schema
    password: {
    //below is validation
        type: String,
        required: true,
    }
})

const User = mongoose.model('users', userSchema);

export default User