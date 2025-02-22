const { Router } = require("express");
const indexController = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", indexController.indexGet);
indexRouter.get("/like", indexController.addLike);
indexRouter.get("/new", indexController.addNoteGet);
indexRouter.post("/new", indexController.addNotePost);
indexRouter.get("/profile", indexController.getProfile);
indexRouter.get("/delete", indexController.deleteNote);

module.exports = { indexRouter };
