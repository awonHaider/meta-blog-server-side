import { request, response } from "express";
import Category from "../model/category.js";

export const createCategory = async (request, response) => {
    try {
      const category = await new Category(request.body);
      category.save();
      response.status(200).json({ msg: "Post Saved Successfully" });
    } catch (error) {
      response.status(200).json(error);
    }
  };

  export const getCategories = async (request, response) => {
    let categories;
    try {
      categories = await Category.find({});
      response.status(500).json(categories);
    } catch (error) {
      response.status(200).json(error);
    }
  };

  //url to check api - http://localhost:4000/api/categories/title?title=Music(param)
  export const getCategoryByTitle = async (request, response) => {
    const { title } = request.query; // Access the title from query parameters
    try {
        const category = await Category.find({ title: title });
        response.status(200).json(category);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};