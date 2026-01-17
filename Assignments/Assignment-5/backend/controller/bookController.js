const bookData = require("../model/bookSchema.js");

const createBook = async (req, res) => {
  try {
    const { title, author, publishedYear, genre } = req.body;
    const existingBook = await bookData.findOne({ title, author });
    if (!title | !author | !publishedYear | !genre) {
      return res.status(404).json({ message: "All fields are required!" });
    } else if (existingBook) {
      res.status(404).send("The book already exists!");
    }
    const Book = await bookData.create({ title, author, publishedYear, genre });
    res.status(201).json(Book, { message: "Book Added successfully!" });
  } catch (error) {
    if (error.code === 11000) {
      return res
        .status(400)
        .json({ error: "Book already exists (duplicate index)" });
    }
    res.status(500).json({ message: `Error Acquired ${error}` });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const { genre } = req.query;
    const filter = genre ? { genre } : {};
    const Books = await bookData.find(filter).sort({ publishedYear: 1 });
    res.status(200).json(Books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getBookById = async (req, res) => {
  try {
    const Book = await bookData.findById(req.params.id);
    if (!Book) {
      res.status(404).json({ message: "Book Not Found!" });
    }
    res.status(200).json(Book);
  } catch (error) {
    res.status(500).json({ message: "Invalid ID" });
  }
};

const updateBookById = async (req, res) => {
  try {
    const Book = await bookData.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!Book) {
      res.status(404).json({ message: "Book Not Found!" });
    }
    res.status(200).json(Book);
  } catch (error) {
    res.status(500).json({ message: "Book not Found! try another Id" });
  }
};

const deleteBookById = async (req, res) => {
  try {
    const Book = await bookData.findByIdAndDelete(req.params.id);
    if (!Book) {
      return res.status(404).json({ message: "The book not Found" });
    }
    res.status(200).json({ message: `The Book was deleted Successfully!` });
  } catch (error) {
    res.status(400).json({ message: "Invalid Id" });
  }
};

const searchByGenre = async (req, res) => {
  try {
    const { genre } = req.query;
    let query = {};
    if (genre) {
      query.genre = genre;
    }
    const book = await bookData.find(query).sort({ publishedYear: 1 });
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch books" });
  }
};

const bookControllers = {
  createBook,
  getAllBooks,
  getBookById,
  updateBookById,
  deleteBookById,
  searchByGenre,
};

module.exports = bookControllers;
