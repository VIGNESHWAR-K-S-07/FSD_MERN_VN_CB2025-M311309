const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const port = 8000;
const bookRoutes = require("./routes/bookRoutes.js");
const middleware = require("./middleware.js");
app.use(express.json());
app.use(cors());

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Book-Library");
    console.log("MongoDB server connected Successfully!");
  } catch (error) {
    console.log("Error in Connecting DB ", error);
    process.exit(1);
  }
};
connectDB();
app.use(middleware);

app.use("/api", bookRoutes);
app.get("/", (req, res) => {
  res.send("Welcome to Library").status(200);
});

app.listen(port, (error) => {
  if (!error) {
    console.log(
      `The server is running successfully on http://localhost:${port}`
    );
  } else {
    console.log("The connection to the server failed", error);
  }
});
