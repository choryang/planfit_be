module.exports = (app) => {
  const post = require("../controllers/postController.js");
  var router = require("express").Router();

  router.get("/api/posts/best", post.postBestList);

  app.use("/", router);
};