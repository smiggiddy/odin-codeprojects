const { Router } = require("express");

const msgRouter = Router();

msgRouter.get("/", (req, res) => {
  res.render("msgs");
});

module.exports = { msgRouter };
