import { request, response } from "express";
import Post from "../model/post.js";

export const createPost = async (request, response) => {
  try {
    const post = await new Post(request.body);
    post.save();
    response.status(200).json({post });
  } catch (error) {
    response.status(200).json(error);
  }
};

//This is middleware of get_posts request
export const getPosts = async (request, response) => {
  let posts;
  try {
    posts = await Post.find({});
    response.status(200).json(posts);
  } catch (error) {
    response.status(500).json(error);
  }
};

export const getPost = async (request, response) => {
  try {
    const post = await Post.findById(request.params.post_id);
    response.status(200).json(post);
  } catch (error) {
    response.status(500).json(error);
  }
};

//First Way using -router.get("/get_post_by_title/:title", getPostByTitle)
// export const getPostByTitle = async (request, response) =>{
//     let ourTitle = request.params.title;
//     try {
//         const post = await Post.find({title: ourTitle});
//     response.status(500).json(post);
//     } catch (error) {
//         response.status(200).json(error);
//     }
// }

//Second way using - router.get('/posts/title', getPostByTitle);

export const getPostByTitle = async (request, response) => {
    const { title } = request.query; // Access the title from query parameters
    try {
        const posts = await Post.find({ title: title });
        response.status(200).json(posts);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};


export const updatePost = async (request, response) =>{
  try {
    const post = await Post.findById(request.params.id);

    if(!post){
      response.status(404).json({msg: 'Post Not Found!'});
    }
    else{
      await Post.findByIdAndUpdate(request.params.id, {$set: request.body});
      response.status(200).json('Post Updated Successfully');
    }
  } catch (error) {
    response.status(500).json(error);
  }
}