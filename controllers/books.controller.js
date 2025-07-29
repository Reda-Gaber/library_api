const book = require("../models/books.model");

exports.apiBooks = async (req, res) => {
    try {
        const books = await book.getBooks(); // <-- صح
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch books" });
    }
};
