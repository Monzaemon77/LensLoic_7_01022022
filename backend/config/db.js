const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",

  user: "root",

  password: `${process.env.PASSWORD}`,

  database: "groupomania",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connecté à la base de données MySQL groupomania!");
});

module.exports.getDB = () => {
  return db;
};
