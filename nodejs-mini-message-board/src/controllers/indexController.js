const db = require("../db/query");
const { body, validationResult } = require("express-validator");
const { dateParser } = require("../utils");

const links = [
  { href: "/", text: "Home" },
  { href: "/new", text: "New" },
];

const validateContent = [
  body("username")
    .trim()
    .isLength({ min: 2, max: 25 })
    .withMessage("Name must be between 2 and 25 characters."),
  body("message").isLength({ min: 2 }).withMessage("Please enter a message."),
];

const validateComment = [body("comment").trim().isLength({ min: 2, max: 140 })];

async function getCommentPerMessage(rows) {
  const commentsTotal = rows.map(async (row) =>
    db.getAllCommentsForMessage(row.id),
  );

  return Promise.all(commentsTotal)
    .then((c) =>
      c.filter((msg) => {
        if (msg.length > 0) return msg;
      }),
    )
    .then((c) =>
      c.map((m) => {
        return { [m[0].message_id]: m.length };
      }),
    )
    .then((result) => Object.assign({}, ...result));
}

async function indexGet(req, res, next) {
  try {
    const rows = await db.getAllMessages();
    if (rows === undefined) rows = [];

    const messageComments = await getCommentPerMessage(rows);

    res.render("index", {
      links: links,
      msgs: rows,
      dateParser: dateParser,
      comments: messageComments,
    });
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
    date: new Date(),
  });
  res.redirect("/");
}

async function commentsGet(req, res) {
  const { id } = req.query;
  const messageId = Number(id);
  try {
    if (!isNaN(messageId)) {
      const message = await db.getMessageById(messageId);
      const comments = await db.getAllCommentsForMessage(messageId);

      res.render("comments", {
        message: message,
        comments: comments,
        links: links,
        dateParser: dateParser,
      });
    } else {
      res.status(404).send("error");
    }
  } catch {
    res.send("something went wrong");
  }
}

async function commentsPost(req, res, next) {
  const { comment, messageId } = req.body;
  db.insertComment(messageId, comment);
  res.redirect(`/comment?id=${messageId}`);
}

module.exports = {
  indexGet,
  newGet,
  newPost,
  commentsGet,
  validateContent,
  commentsPost,
};
