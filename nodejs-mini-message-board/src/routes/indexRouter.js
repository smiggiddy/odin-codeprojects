const { Router } = require("express");
const indexController = require("../controllers/indexController");
const db = require("../db");

const indexRouter = Router();

indexRouter.get("/", indexController.indexGet);
indexRouter.get("/new", indexController.newGet);
indexRouter.post(
  "/new",
  indexController.validateContent,
  indexController.newPost,
);

module.exports = { indexRouter };
