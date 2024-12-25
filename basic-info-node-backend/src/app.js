const express = require("express");
const fs = require("fs");
const app = express();
const path = require("node:path");
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");

const links = [
  { href: "/", text: "Home" },
  { href: "/views-test", text: "Views Test" },
];

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/authors", authorRouter);
app.use("/books", bookRouter);

app.get("/", (req, res) => {
  let filename =
    "/home/smig/repos/github/odin-codeprojects/basic-info-node-backend/src/content/index.html";
  res.sendFile(filename, (err) => {
    if (err) {
      res.send("err");
    } else {
      console.log("sent", filename);
    }
  });
});

app.get("/views-test", (req, res) => {
  res.render("index", { links: links, message: "deez" });
});

app.get("/about", (req, res) => {
  res.sendFile(
    "/home/smig/repos/github/odin-codeprojects/basic-info-node-backend/src/content/about.html",
    (err) => {
      if (err) res.status(404).send("err", err);
    },
  );
});

app.get("/contact-me", (req, res) => {
  res.sendFile(
    "/home/smig/repos/github/odin-codeprojects/basic-info-node-backend/src/content/contact.html",
    (err) => {
      if (err) res.send("err:", err);
    },
  );
});

app.use((req, res, next) => {
  throw new Error("OH NO!");
});

app.use((err, req, res, ext) => {
  console.error(err);
  res.status(err.statuscode || 500).send(err.message);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log("My first time running express baby!");
});