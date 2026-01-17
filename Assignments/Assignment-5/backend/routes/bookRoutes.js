const bookControllers = require("../controller/bookController.js");
const express = require("express");
const Router = express.Router();
Router.get("/books", bookControllers.getAllBooks);
Router.post("/books", bookControllers.createBook);
Router.put("/books/:id", bookControllers.updateBookById);
Router.get("/books/:id", bookControllers.getBookById);
Router.get("/books", bookControllers.searchByGenre);
Router.delete("/books/:id", bookControllers.deleteBookById);

module.exports = Router;
