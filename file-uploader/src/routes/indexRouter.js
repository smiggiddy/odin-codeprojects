const { Router } = require("express")
const indexController = require("../controllers/indexController")

indexRouter = Router()
indexRouter.get("/", indexController.indexGet)


module.exports = indexRouter