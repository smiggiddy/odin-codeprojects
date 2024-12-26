const express = require("express");
const app = express();

const path = require("node:path");
const port = 3000;

const { indexRouter } = require("./routes/indexRouter");
//const { msgRouter } = require("./routes/msgRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
//app.use("/new", msgRouter);

app.listen(port, () => {
  console.log(`Webserver running on ${port}.`);
});
