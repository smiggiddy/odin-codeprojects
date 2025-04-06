const { Auth } = require('../models/auth');
const bcrypt = require('bcrypt');

const db = new Auth();

const loginGet = (req, res, next) => {
    res.send('Login Route');
};

const registerGet = (req, res) => {
    res.render('register');
};
const registerPost = async (req, res, next) => {
    const { username, email, password } = req.body;

    try {
        const hashedPassword = bcrypt.hash(password);
        const result = await db.createUser({
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
            const exists = (await db.getUserByUsername(username))
                ? true
                : false;

            const data = { results: exists };
            res.json(data);
        }
    } catch (e) {
        res.json({ error: e });
    }
};

module.exports = { findByUsername, loginGet, registerPost, registerGet };
