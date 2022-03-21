// Book Model

// likes (integer, minimum default is 0)
// coverImage (string, required and it can be 1 only)
// content ( string, required)
// timestamps (string, required)

const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    likes: { type: Number, required: true, default: 0 },
    coverImage: { type: String, required: true },
    content: { type: String, required: true },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      require: true,
    },
    publication: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "publication",
      require: true,
    },
    comment: {type: mongoose.Schema.Types.ObjectId, ref: "comment", require: true}
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Book = mongoose.model("book", bookSchema);

module.exports = Book;
