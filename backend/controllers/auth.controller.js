const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dbc = require("../config/db");
const db = dbc.getDB();

exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const sql = `INSERT INTO user (user_email, user_password, user_firstname, user_lastname) VALUES (?,?,?,?)`;
      db.query(
        sql,
        [req.body.email, hash, req.body.firstname, req.body.lastname],
        (err, result) => {
          if (!result) {
            res.status(200).json({
              error: true,
              message: "Email deja enregistré ou Formulaire incomplet",
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
  const sql = `SELECT * FROM user WHERE user_email =?`;
  db.query(sql, [req.body.email], async (err, result) => {
    if (err) {
      res.status(404).json({ err });
    }
    if (result[0]) {
      const { user_id } = result[0];
      const match = await bcrypt.compare(
        req.body.password,
        result[0].user_password
      );
      if (match === true) {
        const maxAge = 1 * (24 * 60 * 60 * 1000);
        const token = jwt.sign({ user_id }, "RANDOM_TOKEN_SECRET", {
          expiresIn: maxAge,
        });

        delete result[0].user_password;

        res.cookie("jwt", token, { httpOnly: true });
        res.status(200).json({
          user: result[0],
          token: jwt.sign(
            { userId: result[0].user_id },
            "RANDOM_TOKEN_SECRET",
            {
              expiresIn: "24h",
            }
          ),
        });
      } else {
        res
          .status(200)
          .json({ error: true, message: "Mot de passe non valide" });
      }
    } else {
      res.status(200).json({ error: true, messageEmail: "Email inconnu" });
    }
  });
};

exports.logout = (req, res, next) => {
  res.clearCookie("jwt", "", { maxAge: 1 });
  res.status(200).json("LOGOUT");
};
