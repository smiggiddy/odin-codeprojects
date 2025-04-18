const bcryptjs = require("bcryptjs");
const db = require("../models/query");
const { validationResult } = require("express-validator");

function loginGet(req, res, next) {
  // if (!req.user && req.session.id) {
  //   req.session.id = null;
  // }
  res.render("login", {
    pageTitle: "InspiredCliches | Login",
    errors: req.session.messages,
  });
}

function logOut(req, res, next) {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.session.destroy((err) => {
      if (err) {
        return next(err);
      }
      res.clearCookie("connect.sid"); // Clear the session cookie
      res.redirect("/");
    });
  });
}

function signUpGet(req, res, next) {
  res.render("register", {
    pageTitle: "InspiredCliches | Register",
    errors: null,
  });
}

async function signUpPost(req, res, next) {
  const result = validationResult(req);
  if (result.isEmpty()) {
    const { username, password } = req.body;
    const hashedPassword = await bcryptjs.hash(password, 10);
    db.insertUser(username, hashedPassword);
    res.redirect("/auth/login");
  } else {
    res.status(400).render("register", {
      errors: result.array(),
      pageTitle: "InspiredCliches | Register",
    });
  }
}

module.exports = {
  loginGet,
  logOut,
  signUpPost,
  signUpGet,
};
