const db = require("../db");

async function getAllMessages() {
  return new Promise((resolve) => {
    db.all("SELECT * FROM messages ORDER BY date DESC;", async (err, rows) =>
      resolve(rows),
    );
  });
}

async function insertMessage(msg) {
  db.run("INSERT INTO MESSAGES (message, username, date) VALUES ($1, $2, $3)", [
    msg.message,
    msg.username,
    msg.date,
  ]);
}

module.exports = {
  getAllMessages,
  insertMessage,
};
