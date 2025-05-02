const Db = require('../models/db');
const bcrypt = require('bcrypt');

const db = new Db();

const loginGet = (req, res, next) => {
    res.send('Login Route');
};

const logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
};

const registerGet = (req, res) => {
    res.render('register', { pageTitle: 'Register' });
};
const registerPost = async (req, res, next) => {
    const { username, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await db.auth.createUser({
            username: username,
            password: hashedPassword,
            email: email,
        });
        if (result.error) {
            console.log(result.error);
        } else {
            console.log(result.message);
        }
    } catch (e) {
        console.error(e);
        next(e);
    }

    res.redirect('/');
};

const findByUsername = async (req, res, next) => {
    const { username } = req.query;

    try {
        if (username && username.length > 0) {
            const exists = (await db.auth.getUserByUsername(username))
                ? true
                : false;

            const data = { results: exists };
            res.json(data);
        }
    } catch (e) {
        res.json({ error: e });
    }
};

const findByEmail = async (req, res, next) => {
    const { email } = req.query;
    try {
        if (email && email.length > 0) {
            const exists = (await db.auth.getByEmail(email)) ? true : false;
            const data = { results: exists };
            res.json(data);
        }
    } catch (e) {
        res.json({ error: e });
    }
};

module.exports = {
    findByUsername,
    findByEmail,
    loginGet,
    logout,
    registerPost,
    registerGet,
};
