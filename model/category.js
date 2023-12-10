//mongoose is library that help you perform different kind of operations
//with mongoDB Database
import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    //unique id for each object you save in mongodb is created automatically
    //so we dont create it manually
    title: {
        type: String,
        required: true,
        unique: true
    },
    //"description" is field of schema
    description: {
    //below is validation
        type: String,
        required: true,
    }
})

const Category = mongoose.model('categories', CategorySchema);

export default Category