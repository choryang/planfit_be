const models = require("../models");
const Books = models.books;

exports.bookUpload = (req, res) => {
    const book = {
        title: req.body.title,
        author: req.body.author,
        price: req.body.price,
        stock: req.body.stock,
        sold: req.body.sold,
        detail: req.body.detail,
    };
    
    Books.create(book)
    .then((book) => {
        return res.status(200).send({ uploadSuccess: true, bookId: book.id });
    })
    .catch((err) => {
        return res.status(400).send({
        message: err.message || "Some error occurred while creating the book.",
        });
    });
}

exports.bookList = (req, res) => {
    Books.findAll().then((response) => {
        return res.status(200).send(response);
    })
    .catch((err) => {return res.status(400).send(err);})
}