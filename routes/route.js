import express from "express";
import {
  createPost,
  getPosts,
  getPost,
  getPostByTitle,
  updatePost,
} from "../controller/post-controller.js";

import {
  createCategory,
  getCategories,
  getCategoryByTitle,
} from "../controller/category-controller.js";

import { createUser, Login } from "../controller/user-controller.js";

const router = express.Router();

//APIs for Posts
router.post("/create_post", createPost);

router.get("/get_posts", getPosts);

router.get("/get_post/:post_id", getPost);

//Find the posts with title same as the value written after ':'
//the value ahead of this':' represents dynamic data type
// router.get("/get_post_by_title/:title", getPostByTitle)

router.get("/posts/title", getPostByTitle);

//API for updating the post
router.put("/update_post/:id", updatePost);

//APIs for Category
router.post("/create_category", createCategory);

router.get("/get_categories", getCategories);

router.get("/categories/title", getCategoryByTitle);



//APIs for User
router.post("/sign_up", createUser);

router.post("/log_in", Login)

export default router;
