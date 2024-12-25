const asyncHandler = require("express-async-handler");

const db = require("../db");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

const getAuthorById = asyncHandler(async (req, res) => {
  const { authorId } = req.params;

  const author = await db.getAuthorById(Number(authorId));

  if (!author) {
    throw new CustomNotFoundError("Author not found");
  }

  res.send(`Author name: ${author.name}`);
});

module.exports = { getAuthorById };
