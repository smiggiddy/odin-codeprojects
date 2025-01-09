const express = require("express");
const path = require("node:path");

const app = express();
const port = 8080;

const { indexRouter } = require("./routes/indexRouter");
const assetsPath = path.join(path.dirname(__dirname), "public");

app.set("views", path.join(__dirname, "views"));
app.set(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

const server = app.listen(port, () => {
  console.log(`Server started at ${port}`);
});

const gracefulShutdownHandler = (signal) => {
  console.log(`Caught ${signal}, gracefully shutting down`);

  server.close(() => {
    console.log("shutting down server.");
    process.exit();
  });
};

process.on("SIGINT", gracefulShutdownHandler);
process.on("SIGTERM", gracefulShutdownHandler);
