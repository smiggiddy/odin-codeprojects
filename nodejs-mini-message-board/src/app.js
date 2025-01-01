const express = require("express");
const app = express();

const path = require("node:path");
const port = 3000;

const { indexRouter } = require("./routes/indexRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

//Logging
app.use((req, res, next) => {
  req.time = new Date(Date.now()).toISOString();
  const clientIp = req.header("cf-connecting-ip") || req.socket.remoteAddress;
  console.log(req.time, req.method, req.hostname, req.path, clientIp);
  next();
});

app.use("/", indexRouter);

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
