const db = require("../db");

async function getAllMessages() {
  return new Promise((resolve) => {
    db.all("SELECT * FROM messages ORDER BY date DESC;", async (err, rows) =>
      resolve(rows),
    );
  });
}

async function getMessageById(id) {
  return new Promise((resolve) => {
    db.get("SELECT * FROM messages WHERE id = (?)", [id], async (err, rows) => {
      resolve(rows);
    });
  });
}

async function insertMessage(msg) {
  db.run("INSERT INTO messages (message, username, date) VALUES ($1, $2, $3)", [
    msg.message,
    msg.username,
    msg.date,
  ]);
}

async function getAllCommentsForMessage(msgId) {
  return new Promise((resolve) => {
    db.all(
      "SELECT * FROM COMMENTS WHERE message_id = (?)",
      [msgId],
      async (err, rows) => resolve(rows),
    );
  });
}

async function insertComment(msgId, comment) {
  db.run("INSERT INTO comments (comment, message_id) VALUES ($1, $2)", [
    comment,
    msgId,
  ]);
}

module.exports = {
  getMessageById,
  getAllMessages,
  insertMessage,
  getAllCommentsForMessage,
  insertComment,
};
