const { logging } = require("./middlewares/logging");
const path = require("node:path");
const express = require("express");
const passport = require("./middlewares/auth");
const session = require("express-session");
const SQLiteStore = require("connect-sqlite3")(session);

const { indexRouter } = require("./routes/indexRouter");
const { authRouter } = require("./routes/authRouter");

const app = express();
const port = process.env.APP_PORT || 5173;

const assetsPath = path.join(path.dirname(__dirname), "public");
app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(
  session({
    store: new SQLiteStore({ dir: "./src/db/", db: "keynotes.db" }),
    secret: "keynotes",
    cookie: { maxAge: 7 * 24 * 60 * 60 * 1000, sameSite: "strict" },
    saveUninitialized: false,
    resave: false,
  }),
);

// app.use(passport.session());
app.use(passport.authenticate("session"));
app.use(express.urlencoded({ extended: false }));
app.use(logging);
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});
app.use("/", indexRouter);
app.use("/auth", authRouter);

const server = app.listen(port, () =>
  console.log(`App running on port: ${port}`),
);

const gracefulShutdownHandler = (signal) => {
  console.log(`\n${signal} received.`);

  server.close(() => {
    console.log("Shutting down the server process...");
    process.exit();
  });
};

process.on("SIGINT", gracefulShutdownHandler);
process.on("SIGTERM", gracefulShutdownHandler);
