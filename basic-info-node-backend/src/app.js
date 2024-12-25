const express = require("express");
const fs = require("fs");
const app = express();
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");

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
  console.log("Another middleware");
  res.send("Response from this middleware");
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
