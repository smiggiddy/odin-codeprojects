const { Router } = require("express");
const indexController = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", indexController.indexGet);
indexRouter.get("/new", indexController.newGet);
indexRouter.post(
  "/new",
  indexController.validateContent,
  indexController.newPost,
);
indexRouter.get("/comment", indexController.commentsGet);
indexRouter.post("/comment", indexController.commentsPost);

module.exports = { indexRouter };
