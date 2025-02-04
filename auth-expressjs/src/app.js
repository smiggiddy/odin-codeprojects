const path = require("node:path");
const { Pool } = require("pg");
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const fs = require("node:fs");
const bcryptjs = require("bcryptjs");

const pool = new Pool({
  connectionString: process.env.CONNECTION_STRING,
});

const initSQL = path.join(__dirname, "../migrations/init.sql");

fs.readFile(initSQL, "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  pool.query(data);
});

console.log(process.env.DEEZNUTS);
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(
  session({
    store: new (require("connect-pg-simple")(session))({
      pool: pool,
      tableName: "user_sessions",
      createTableIfMissing: true,
    }),
    resave: false,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 },
    saveUninitialized: false,
    secret: "deezNuts",
  }),
);
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => console.log("app running on port 3000"));

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const { rows } = await pool.query(
        "SELECT * FROM users WHERE username = $1",
        [username],
      );
      const user = rows[0];
      const match = await bcryptjs.compare(password, user.password);

      if (!user) {
        return done(null, false, { message: "Incorrect username/password." });
      }

      if (!match) {
        return done(null, false, { message: "incorrect username/password" });
      }

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }),
);

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env["GOOGLE_CLIENT_ID"],
      clientSecret: process.env["GOOGLE_CLIENT_SECRET"],
      callbackURL: "/oauth2/redirect/google",
      scope: ["profile"],
    },
    async function verify(accessToken, refreshToken, profile, cb) {
      try {
        await pool.query("BEGIN");
        const { rows: federatedRows } = await pool.query(
          "SELECT * FROM federated_credentials WHERE provider = $1 AND subject = $2",
          ["https://accounts.google.com", profile.id],
        );
        let id = federatedRows.length > 0 ? federatedRows[0].user_id : null;
        if (federatedRows.length === 0) {
          const { rows: newUserRows } = await pool.query(
            "INSERT INTO users (username) VALUES ($1) RETURNING *",
            [profile.displayName],
          );
          id = newUserRows[0].id;
          await pool.query(
            "INSERT INTO federated_credentials (user_id, provider, subject) VALUES ($1, $2, $3)",
            [id, "https://accounts.google.com", profile.id],
          );
          const user = {
            id: id,
            name: profile.displayName,
          };
          pool.query("COMMIT");
          cb(null, user);
        } else {
          const { rows: userRows } = await pool.query(
            "SELECT * FROM users WHERE id = $1",
            [id],
          );
          cb(null, userRows[0]);
        }
      } catch (e) {
        await pool.query("ROLLBACK");
        cb(e);
      }
    },
  ),
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const { rows } = await pool.query("SELECT * FROM users WHERE id= $1", [id]);
    const user = rows[0];
    done(null, user);
  } catch (e) {
    done(e);
  }
});

app.use((req, res, next) => {
  console.log(req.user);
  console.table(req.session.passport);
  next();
});

app.get("/", (req, res) => {
  if (req.session.viewCount) {
    req.session.viewCount++;
  } else {
    req.session.viewCount = 1;
    req.session.deezNuts = "big AF dog";
  }
  res.render("index", { user: req.user, sessions: req.session.viewCount });
});

app.get("/sign-up", (req, res) => res.render("sign-up-form"));
app.post("/sign-up", async (req, res, next) => {
  try {
    const hashedPassword = await bcryptjs.hash(req.body.password, 10);
    await pool.query("INSERT INTO users (username, password) VALUES ($1, $2)", [
      req.body.username,
      hashedPassword,
    ]);
    res.redirect("/");
  } catch (err) {
    next(err);
  }
});

app.post(
  "/log-in",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/",
  }),
);

app.get("/log-out", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

app.get("/login/federated/google", passport.authenticate("google"));
app.get(
  "/oauth2/redirect/google",
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/login",
  }),
);
