const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("All Indexes"));

module.exports = indexRouter;
