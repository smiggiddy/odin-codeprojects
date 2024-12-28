const db = require("../db/query");
const { body, validationResult } = require("express-validator");

const links = [
  { href: "/", text: "Home" },
  { href: "/new", text: "New" },
];

const validateContent = [
  body("message").isLength({ min: 2 }).withMessage("Must enter a message!"),
  body("username")
    .trim()
    .isLength({ min: 2, max: 25 })
    .withMessage("Username Must be between 2 and 25 chars."),
];

async function indexGet(req, res, next) {
  try {
    const rows = await db.getAllMessages();
    if (rows === undefined) rows = [];
    res.render("index", { links: links, msgs: rows });
  } catch {
    res.render("index", { links: links, msgs: [] });
  }
}

function newGet(req, res) {
  res.render("msgs", { links: links });
}

async function newPost(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render("msgs", {
      links: links,
      errors: errors.array(),
    });
  }
  const { message, username } = req.body;
  db.insertMessage({
    message: message,
    username: username,
    date: new Date().toISOString(),
  });
  res.redirect("/");
}

module.exports = {
  indexGet,
  newGet,
  newPost,
  validateContent,
};
