const db = require("./db");

function getEveryNote() {
  try {
    const query = db.query(
      `SELECT messages.message_id, message, media, date, users.username AS user, messages.user_id,  COUNT(likes.likes_id) AS likes_count 
      FROM messages LEFT JOIN users ON messages.user_id = users.user_id 
      LEFT JOIN likes ON messages.message_id = likes.message_id
      GROUP BY messages.message_id, message, media, date, users.username
      `,
    );

    const data = query.all();
    return data;
  } catch (err) {
    return err;
  }
}

function putNewNote(note) {
  const { message, media, userId } = note;
  const date = Date.now();
  const query = db.query(
    `INSERT INTO messages (message, media, user_id, date)  VALUES ($1, $2, $3, $4)`,
  );
  query.run({ $1: message, $2: media, $3: userId, $4: date });
}

function deleteNote(messageId) {
  try {
    const query = db.query(`DELETE FROM likes WHERE message_id = $1`);
    query.run({ $1: messageId });
    const queryTwo = db.query(`DELETE FROM messages WHERE message_id = $1`);
    queryTwo.run({ $1: messageId });
  } catch (e) {
    console.log(e);
  }
}

function getLikesByUser(userId) {
  const query = db.query(`SELECT message_id FROM likes WHERE user_id = $1`);

  return query.all({ $1: userId });
}

function getTotalLikesByMessageId(messageId) {
  const query = db.query(`SELECT COUNT(1) FROM likes WHERE message_id = $1`);
  return query.get({ $1: messageId });
}

function getNoteById(noteId) {
  const query = db.query(
    `SELECT message, user_id from messages WHERE message_id = $1`,
  );
  return query.get({ $1: noteId });
}

function checkIfNotedLiked(messageId, userId) {
  const query = db.query(
    `SELECT * FROM likes WHERE message_id = $1 and user_id = $2`,
  );

  const res = query.get({ $1: messageId, $2: userId });
  return res;
}

function insertLike(messageId, userId) {
  try {
    const query = db.query(
      `INSERT INTO likes (message_id, user_id, liked_at) VALUES ($1, $2, $3)`,
    );
    query.run({ $1: messageId, $2: userId, $3: Date.now() });
  } catch (err) {
    console.log(err);
    return err;
  }
}

function deleteLike(messageId, userId) {
  try {
    const query = db.query(
      `DELETE FROM likes WHERE message_id = $1 and user_id = $2`,
    );
    query.run({ $1: messageId, $2: userId });
  } catch (err) {
    console.log(err);
    return err;
  }
}

function insertUser(username, password) {
  try {
    const query = db.query(
      "INSERT INTO users (username, password) VALUES ($username, $password)",
    );
    query.run({ $username: username, $password: password });
  } catch (err) {
    return err;
  }
}
function getUserById(userId) {
  const query = db.query(
    `SELECT username, user_id FROM users WHERE user_id = $1`,
  );
  const res = query.get({ $1: userId });

  return res;
}

function getAllNotesByUserId(userId) {
  const query = db.query(`SELECT COUNT(1) FROM messages WHERE user_id = $1`);
  const res = query.get({ $1: userId });

  return res["COUNT(1)"];
}

module.exports = {
  getEveryNote,
  getNoteById,
  putNewNote,
  insertLike,
  deleteLike,
  deleteNote,
  checkIfNotedLiked,
  insertUser,
  getLikesByUser,
  getTotalLikesByMessageId,
  getUserById,
  getAllNotesByUserId,
};
