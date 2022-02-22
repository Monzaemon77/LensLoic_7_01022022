const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dbc = require("../config/db");

exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const sql = `INSERT INTO user (email, password, nom, prenom) VALUES (?,?,?,?)`;
      const db = dbc.getDB();
      db.query(
        sql,
        [req.body.email, hash, req.body.nom, req.body.prenom],
        (err, result) => {
          if (!result) {
            res.status(200).json({
              message:
                "Email deja enregistré ou Formulaire incomplet/incorrect",
            });
          } else {
            res.status(201).json({ message: "Utilisateur créé !" });
          }
        }
      );
    })
    .catch((error) =>
      res.status(500).json({ message: "Creation échoué", error })
    );
};

exports.login = (req, res, next) => {
  const sql = `SELECT * FROM user WHERE email =?`;
  const db = dbc.getDB();
  db.query(sql, [req.body.email], async (err, result) => {
    if (err) {
      res.status(404).json({ err });
    }
    if (result.length <= 0) {
      res.status(200).json({ message: "Email non trouvé" });
      return;
    }
    const match = await bcrypt.compare(req.body.password, result[0].password);
    if (match === true) {
      delete result[0].password;
      res.status(200).json({
        user: result[0],
        token: jwt.sign({ id: result[0].id }, "RANDOM_TOKEN_SECRET", {
          expiresIn: "24h",
        }),
      });
    } else {
      res.status(200).json({ message: "Mot de passe non valide" });
    }
  });
};
