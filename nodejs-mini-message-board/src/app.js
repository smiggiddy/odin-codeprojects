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

const server = app.listen(port, () => {
  console.log(`Webserver running on ${port}.`);
});

// Shutdown Logic
const gracefulShutdownHandler = (signal) => {
  console.log(`Caught ${signal}, gracefully shutting down`);

  server.close(() => {
    console.log(`Shutting down server`);
    process.exit();
  });
};

process.on("SIGINT", gracefulShutdownHandler);
process.on("SIGTERM", gracefulShutdownHandler);
