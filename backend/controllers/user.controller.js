const dbc = require("../config/db");
const db = dbc.getDB();

exports.getOneUser = (req, res, next) => {
  const { id: userId } = req.params;
  const sqlGetUser = `SELECT * FROM user WHERE user_id = ?`;
  db.query(sqlGetUser, [userId], (err, result) => {
    if (err) {
      res.status(404).json({ err });
      throw err;
    }
    delete result[0].user_password;
    res.status(200).json(result);
  });
};

exports.updateOneUser = (req, res, next) => {
  const { id: userId } = req.params;
  const sqlUpdateUser = `UPDATE user SET user_firstname = ?, user_lastname = ?, user_bio = ? WHERE user_id = ?`;
  db.query(
    sqlUpdateUser,
    [req.body.firstname, req.body.lastname, req.body.bio, userId],
    (err, result) => {
      if (err) {
        res.status(404).json({ err });
        throw err;
      }
      if (result) {
        res.status(200).json(result);
      }
    }
  );
};

exports.getProfilPicture = (req, res, next) => {};

exports.deleteUser = (req, res, next) => {
  const { id: userId } = req.params;
  const sqlDeleteUser = `DELETE FROM user WHERE user_id = ?`;
  db.query(sqlDeleteUser, [userId], (err, result) => {
    if (err) {
      res.status(404).json({ err });
      throw err;
    }
    if (result) {
      res.status(200).json({ message: "Utilisateur supprimé !" });
    }
  });
};

exports.follow = (req, res, next) => {
  const sql = `SELECT * FROM user WHERE user_id =?`;
  db.query(sql, [req.body.idToFollow], (err, result) => {
    if (err) {
      res.status(404).json({ err });
    }
    if (result.length <= 0) {
      res.status(404).json({ message: "User existe pas" });
      return;
    }
    const { id: userId } = req.params;
    const sqlFollow = `INSERT INTO follow (follower_id, following_id) VALUES (?,?)`;
    db.query(sqlFollow, [userId, req.body.idToFollow], (err, result) => {
      if (err) {
        res.status(200).json({ message: "User déjà follow" });
        return;
      }
      if (result) {
        res.status(200).json({ message: "Utilisateur suivi !" });
      }
    });
  });
};

exports.unfollow = (req, res, next) => {
  const sql = `SELECT * FROM user WHERE user_id =?`;
  db.query(sql, [req.body.idToUnfollow], (err, result) => {
    if (err) {
      res.status(404).json({ err });
    }
    if (result.length <= 0) {
      res.status(404).json({ message: "User existe pas" });
      return;
    }
    const { id: userId } = req.params;
    const sqlunfollow = `DELETE FROM follow WHERE following_id=? AND follower_id=?`;
    db.query(sqlunfollow, [req.body.idToUnfollow, userId], (err, result) => {
      if (err) {
        res.status(200).json({ err });
        return;
      }
      if (result) {
        res
          .status(200)
          .json({ message: "Utilisateur unfollow ou déjà unfollow!" });
      }
    });
  });
};
