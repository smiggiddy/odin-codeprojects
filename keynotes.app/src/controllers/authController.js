const bcryptjs = require("bcryptjs");
const db = require("../models/db");
const passport = require("../middlewares/auth");

function loginGet(req, res, next) {
  res.render("login", { pageTitle: "KeyNotes.App | Login" });
}

function logOut(req, res, next) {
  req.logout((err) => {
    if (err) return next(err);
  });
  res.redirect("/");
}

function signUpGet(req, res, next) {
  res.render("register", { pageTitle: "KeyNotes.App | Register" });
}

async function signUpPost(req, res, next) {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcryptjs.hash(password, 10);
    const query = db.query(
      "INSERT INTO users (username, password) VALUES ($username, $password)",
    );
    query.run({ $username: username, $password: hashedPassword });
    res.redirect("/");
  } catch (err) {
    next(err);
  }
}

module.exports = {
  loginGet,
  logOut,
  signUpPost,
  signUpGet,
};
