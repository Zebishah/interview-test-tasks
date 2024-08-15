import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import express from "express";
import Book from "../Models/Book.js";
const app = express();
dotenv.config();
let success = null;

export const createBook = async (req, res, next) => {
  const { title, author, description, no_Of_Pages } = req.body;

  let checkBook = null,
    newBook = null;
  try {
    checkBook = await Book.findOne({ title: title });
    if (checkBook) {
      return res.json({
        success: false,
        message: "This Book already exists",
        statusCode: 400,
      });
    }

    newBook = new Book({ title, author, description, no_Of_Pages });
    await newBook.save();
    if (!newBook) {
      return res.json({
        success: false,
        message: "New Book Not created",
        statusCode: 400,
      });
    }

    return res.json({
      success: true,
      message: "New Book Created Successfully",
      Book: newBook,
      statusCode: 200,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
      statusCode: 400,
    });
  }
};

export const getBooks = async (req, res, next) => {
  let Books = null;
  try {
    Books = await Book.find();

    if (!Books) {
      return res.json({
        success: false,
        message: "No Books found",
        statusCode: 400,
      });
    }

    return res.json({
      success: true,
      message: "Here are your books",
      Books: Books,
      statusCode: 200,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
      statusCode: 400,
    });
  }
};

export const getBookById = async (req, res, next) => {
  let id = req.params.id;
  let Books = null;
  try {
    Books = await Book.findById(id);

    if (!Books) {
      return res.json({
        success: false,
        message: "No Books found",
        statusCode: 400,
      });
    }

    return res.json({
      success: true,
      message: "Here are your books",
      Books: Books,
      statusCode: 200,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
      statusCode: 400,
    });
  }
};

export const deleteBook = async (req, res, next) => {
  let id = req.params.id;
  let deletedBook = null;
  try {
    deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.json({
        success: false,
        message: "Book Not Found",
        statusCode: 400,
      });
    }

    return res.json({
      success: true,
      message: "Here is your deleted book",
      DeletedBook: deletedBook,
      statusCode: 200,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
      statusCode: 400,
    });
  }
};

export const updateBook = async (req, res, next) => {
  const { title, author, description, no_Of_Pages } = req.body;
  console.log(title, author, description, no_Of_Pages);
  let id = req.params.id;
  let updatedBook = null;
  try {
    updatedBook = await Book.findById(id);
    if (!updatedBook) {
      return res.json({
        success: false,
        message: "Book Not Found",
        statusCode: 400,
      });
    }
    updatedBook.title = title || updatedBook.title;
    updatedBook.author = author || updatedBook.author;
    updatedBook.description = description || updatedBook.description;
    updatedBook.no_Of_Pages = no_Of_Pages || updatedBook.no_Of_Pages;
    await updatedBook.save();
    return res.json({
      success: true,
      message: "Here is your Updated book",
      updatedBook: updatedBook,
      statusCode: 200,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
      statusCode: 400,
    });
  }
};
