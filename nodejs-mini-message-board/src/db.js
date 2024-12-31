const sqlite3 = require("sqlite3").verbose();
const path = require("node:path");
const { stat } = require("node:fs");
const { mkdir } = require("node:fs/promises");

const dbDirPath = path.join(path.dirname(__dirname), "/db");
const dbPath = path.join(dbDirPath, "/message-board.db");
console.log(dbPath);

async function makeDirectory(path) {
  const dirCreation = await mkdir(path);
  return dirCreation;
}

// Make sure DB exists
stat(dbDirPath, (err, stats) => {
  if (err !== null) {
    makeDirectory(dbDirPath);
  }
});

const db = new sqlite3.Database(dbPath);
db.serialize(() => {
  const SQL = `
CREATE TABLE IF NOT EXISTS messages ( 
  id INTEGER PRIMARY KEY ASC,
  message TEXT,
  username VARCHAR(25),
  date NUMBER
);
`;
  db.exec(SQL);
});

module.exports = db;
