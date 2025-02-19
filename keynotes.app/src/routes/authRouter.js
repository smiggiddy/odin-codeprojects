const { Router } = require("express");
const authController = require("../controllers/authController");
const passport = require("../middlewares/auth");
const { body } = require("express-validator");

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
authRouter.post(
  "/register",
  body("password").isLength({ min: 5 }).withMessage("Password is too short"),
  body("confirm-password").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Passwords do not match!");
    }
    return true;
  }),
  authController.signUpPost,
);

module.exports = { authRouter };
