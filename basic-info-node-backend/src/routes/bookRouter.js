const { Router } = require("express");

const bookRouter = Router();

bookRouter.get("/", (req, res) => res.send("All Books"));

module.exports = bookRouter;
