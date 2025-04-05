const db = require("../models/auth")
const indexGet = async (req, res) => {
    const data = await db.allUsers()
    console.dir(data)
    res.render("main")
}

module.exports = { indexGet }