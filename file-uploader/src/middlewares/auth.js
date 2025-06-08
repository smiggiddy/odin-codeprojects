const bcrypt = require('bcrypt');
const passport = require('passport');
const Db = require('../models/db');
const LocalStrategy = require('passport-local').Strategy;

const db = new Db();

passport.use(
    new LocalStrategy(async (username, password, done) => {
        try {
            const user = await db.auth.getUserByUsername(username);

            if (!user) {
                return done(null, false, {
                    message: 'Incorrect username or passowrd',
                });
            }

            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                return done(null, false, {
                    message: 'inccorect username or password',
                });
            }

            // ensure users root directory has been created
            const rootDirId = await db.file.getUserRootDirectoryId(user.id);
            if (rootDirId === null)
                await db.file.createDirectory(user, 'root', null);

            return done(null, user);
        } catch (err) {
            return done(err);
        }
    }),
);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await db.auth.getUserById(id);
        const rootDirId = await db.file.getUserRootDirectoryId(user.id);
        user.rootDirectoryId = rootDirId;
        done(null, user);
    } catch (err) {
        done(err);
    }
});

const loggedIn = function (req, res, next) {
    if (!req.user) res.redirect('/');
    next();
};

module.exports = { passport, loggedIn };
