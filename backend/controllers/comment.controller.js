const dbc = require("../config/db");
const db = dbc.getDB();

exports.deleteOneComment = (req, res) => {
  const comment_id = req.params.id;
  const sql = `DELETE FROM comment WHERE comment_id = ?`;
  db.query(sql, [comment_id], (err, result) => {
    if (err) {
      res.status(404).json({ err });
      throw err;
    }
    res.status(200).json(result);
  });
};

exports.getOneComment = (req, res) => {
  const commentId = req.params.id;
  const sql = `SELECT * FROM comment WHERE comment_id = ?`;
  db.query(sql, [commentId], (err, result) => {
    if (err) {
      res.status(404).json({ err });
      throw err;
    }
    res.status(200).json(result);
  });
};

exports.getAllComments = (req, res) => {
  const sql = `SELECT * FROM comment`;
  db.query(sql, (err, result) => {
    if (err) {
      res.status(404).json({ err });
      throw err;
    }
    res.status(200).json(result);
  });
};

exports.createComment = (req, res, next) => {
  const sql = `INSERT INTO comment (commenter_id, post_id, comment, datecreate, date_update) VALUES (?,?,?,NOW(),NOW())`;
  db.query(
    sql,
    [req.body.commenter_id, req.body.post_id, req.body.comment],
    (err, result) => {
      if (err) {
        res.status(404).json({ err });
        console.log(err);
        throw err;
      }
      res.status(200).json(result);
    }
  );
};

exports.updateComment = (req, res, next) => {
  const { id: commentId } = req.params;
  const sqlUpdatePost = `UPDATE comment SET comment = ?, date_update = NOW() WHERE comment_id = ?`;
  db.query(sqlUpdatePost, [req.body.comment, commentId], (err, result) => {
    if (err) {
      res.status(404).json({ err });
      throw err;
    }
    if (result) {
      res.status(200).json(result);
    }
  });
};
