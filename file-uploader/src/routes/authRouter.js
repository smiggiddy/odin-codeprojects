const { Router } = require("express");
const authController = require("../controllers/authController")

const authRouter = Router();

authRouter.get("/login", authController.loginGet)
authRouter.get("/register", authController.registerGet)
authRouter.post("/register", authController.registerPost)


module.exports = authRouter;