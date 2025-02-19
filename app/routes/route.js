module.exports = (app) => {
  const book = require("../controllers/bookController.js");
  var router = require("express").Router();

  router.get("/api/books", book.bookList);

  app.use("/", router);
};