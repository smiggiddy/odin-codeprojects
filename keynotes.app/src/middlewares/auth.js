const bcryptjs = require("bcryptjs");
const db = require("../models/db");
const LocalStrategy = require("passport-local");
const passport = require("passport");

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const query = db.query(`SELECT * FROM users WHERE username = $1`);
      const user = query.get({ $1: username });

      if (!user) {
        return done(null, false, {
          message: "Incorrect username or password.",
        });
      }

      const match = await bcryptjs.compare(password, user.password);

      if (!match) {
        return done(null, false, { message: "Incorrect username or password" });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }),
);

passport.serializeUser((user, done) => {
  done(null, user.user_id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const query = db.query("SELECT * FROM users WHERE user_id = $userId");
    const results = query.get({ $userId: id });
    done(null, results);
  } catch (err) {
    done(err);
  }
});

module.exports = passport;
