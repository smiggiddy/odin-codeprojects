const db = require("../db");

const SQL = `
CREATE TABLE IF NOT EXISTS messages ( 
  id INTEGER PRIMARY KEY ASC,
  message TEXT,
  username VARCHAR(25),
  date NUMBER

);

INSERT INTO messages (message, username, date) 
  VALUES
  ('this is cool', 'smig.tech', '1735391440168.0'),
  ('I like this app', 'smigz', '1733577117'),
  ('For real, it is nice', 'mikey', '1735391626')
`;

async function main(db) {
  console.log("seeding db...");
  db.serialize(() => {
    db.exec(SQL);
  });
}

main(db);
