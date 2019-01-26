const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  authors: { type: Array, required: true },
  title: { type: String, required: true },
  publisher: String,
  thumbnail: String,
  description: String,
  link: String
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
