const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/library";

const booksSchema = mongoose.Schema({
    name: String,
    description: String
})

const book = mongoose.model("book", booksSchema);

exports.getBooks = () => {
    return mongoose.connect(url)
    .then(() => book.find({}))
    .finally(() => mongoose.disconnect());

}