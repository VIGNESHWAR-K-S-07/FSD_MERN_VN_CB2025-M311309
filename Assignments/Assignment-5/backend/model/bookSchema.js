const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    publishedYear: {
      type: Number,
      required: true,
      trim: true,
      validate: {
        validator: (year) => {
          const currentYear = new Date().getFullYear();
          return year >= 1000 && year <= currentYear;
        },
        message: (props) =>
          `Year ${
            props.value
          } is invalid. Must be between 1000 and ${new Date().getFullYear()}.`,
      },
    },
    genre: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

bookSchema.index({ title: 1, author: 1 }, { unique: true });
module.exports = mongoose.model("bookData", bookSchema);
