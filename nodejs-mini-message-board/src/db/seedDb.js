const db = require("../db");

const SQL = `
CREATE TABLE IF NOT EXISTS messages ( 
  id INTEGER PRIMARY KEY ASC,
  message TEXT,
  username VARCHAR(25),
  date TEXT

);

INSERT INTO messages (message, username, date) 
  VALUES
  ('this is cool', 'smig.tech', '2024-12-24T01:12:340Z'),
  ('I like this app', 'smigz', '2024-12-25T00:32:43.540Z'),
  ('For real, it is nice', 'mikey', '2024-12-28T00:35:43.540Z')
`;

async function main(db) {
  console.log("seeding db...");
  db.serialize(() => {
    db.exec(SQL);
  });
}

main(db);
