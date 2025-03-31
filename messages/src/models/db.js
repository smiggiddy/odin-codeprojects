const { Database } = require("bun:sqlite");
const fs = require("node:fs");
const path = require("node:path");

const dbDirPath = path.join(path.dirname(__dirname), "db");
const dbPath = path.join(dbDirPath, "/keynotes.db");

if (!fs.existsSync(dbDirPath)) {
  fs.mkdirSync(dbDirPath);
  console.log(`Created DB Directory at ${dbDirPath}`);
}

const db = new Database(dbPath);
// Enable WAL Mode
db.exec("PRAGMA journal_mode = WAL;");

const initSQL = path.join(__dirname, "./init.sql");
fs.readFile(initSQL, "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  db.exec(data);
});

module.exports = db;
