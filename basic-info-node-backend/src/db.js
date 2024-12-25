const authors = [
  { id: 1, name: "Bob" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Fred" },
];

async function getAuthorById(authorId) {
  return authors.find((author) => author.id === authorId);
}

module.exports = { getAuthorById };
