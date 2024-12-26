const { Router } = require("express");

const indexRouter = Router();

links = [
  { href: "/", text: "Home" },
  { href: "/new", text: "New" },
];

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
  {
    text: "This is a smig's app",
    user: "Smig's",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { links: links, msgs: messages });
});

indexRouter.get("/new", (req, res) => {
  res.render("msgs");
});

indexRouter.post("/new", (req, res) => {
  messages.unshift({
    text: req.body.message,
    user: req.body.username,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = { indexRouter };
