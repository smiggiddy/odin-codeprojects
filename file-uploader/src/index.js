const express = require("express");
const session = require("express-session")
const passport = require("passport")
const path = require("node:path");

const port = process.env.APP_PORT || 3000;
const app = express();

const authRouter = require("./routes/authRouter")
const indexRouter = require("./routes/indexRouter")

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }))


app.use("/", indexRouter);
app.use("/auth", authRouter);


app.listen(port, () => {
    console.log(`App listening on ${port}`);
});