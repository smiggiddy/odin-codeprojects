const { Pool } = require("pg");

// Todo make this env variables
module.exports = new Pool({
  host: "smig-ca04.lab.smig.tech",
  user: "odin",
  database: "odin",
  password: "odinproject",
  port: 32343,
});
// 32343;
