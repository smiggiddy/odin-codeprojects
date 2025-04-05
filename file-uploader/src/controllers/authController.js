const db = require("../models/auth")

const loginGet = (req, res, next) => {
    res.send("Login Route")
}

const registerGet = (req, res) => {
    res.render("register")
}

const registerPost = async (req, res, next) => {
    const { username, email, password, "password-confirmation": passwordConfirmation } = req.body;

    await db.createUser({ username: username, password: password, email: email })

    res.redirect("/")
}

module.exports = { loginGet, registerPost, registerGet }