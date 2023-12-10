//mongoose is library that help you perform different kind of operations
//with mongoDB Database
import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  //unique id for each object you save in mongodb is created automatically
  //so we dont create it manually
  postTitle: {
    type: String,
    required: true,
  },
  //"description" is field of schema
  postCategory: {
    //below is validation
    type: String,
    required: true,
  },
  postContent: {
    type: String,
    required: true,
  },
  authorName: {
    type: String,
    required: true,
  },
  postBanner: {
    //below is validation
    type: String,
    required: true,
  },
  authorImg: {
    type: String,
    required: true,
  },
  postDate: {
    type: String,
    required: true,
  }
});

const Post = mongoose.model("posts", postSchema);

export default Post;
