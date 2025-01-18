const { Router } = require("express");
const indexController = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", indexController.indexGet);
//indexRouter.post("/add")
indexRouter.get("/store", indexController.storeGet);
indexRouter.get("/stores", indexController.storesGetAll);
indexRouter.post("/store", indexController.storePost);
indexRouter.delete("/store", indexController.storeDelete);
indexRouter.get("/category", indexController.categoryGet);
indexRouter.get("/categories", indexController.categoryGetAll);
indexRouter.post("/category", indexController.categoryPost);
indexRouter.delete("/category", indexController.categoryDelete);
indexRouter.post("/item", indexController.itemPost);
indexRouter.get("/item/:id", indexController.itemEditGet);
indexRouter.post("/item/:id", indexController.itemEditPost);
indexRouter.delete("/item", indexController.itemDelete);

module.exports = { indexRouter };
