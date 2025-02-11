const { Router } = require("express");
const authController = require("../controllers/authController");
const passport = require("../middlewares/auth");

const authRouter = Router();

//authRouter.get("/", (req, res) => res.redirect("/auth/login"));
authRouter.get("/login", authController.loginGet);
authRouter.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/auth/login",
  }),
);
authRouter.get("/logout", authController.logOut);
authRouter.get("/register", authController.signUpGet);
authRouter.post("/register", authController.signUpPost);

module.exports = { authRouter };
