import express from "express";
import {
  createBook,
  deleteBook,
  getBookById,
  getBooks,
  updateBook,
} from "../Controllers/Book-Controllers.js";

const BookRoutes = express.Router();

BookRoutes.post("/createBook", createBook);
BookRoutes.get("/getBooks", getBooks);
BookRoutes.get("/getBookById/:id", getBookById);
BookRoutes.post("/deleteBook/:id", deleteBook);
BookRoutes.post("/updateBook/:id", updateBook);

export default BookRoutes;
