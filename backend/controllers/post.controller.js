const dbc = require("../config/db");
const jwt = require("jsonwebtoken");
const db = dbc.getDB();

exports.getAllPosts = (req, res, next) => {
  const { jwt: token } = req.cookies;
  const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
  const { user_id: userId } = decodedToken;
  const sql = "SELECT * FROM post WHERE user_id = ? ORDER BY datecreate DESC";
  db.query(sql, [userId], (err, result) => {
    if (err) {
      res.status(404).json({ err });
      throw err;
    }
    delete result.user_password;
    res.status(200).json(result);
  });
};

exports.getOnePost = (req, res, next) => {
  const { id: postId } = req.params;
  const sqlGetOnePost = `SELECT * FROM post WHERE post_id = ?`;
  db.query(sqlGetOnePost, [postId], (err, result) => {
    if (err) {
      res.status(404).json({ err });
      throw err;
    }
    res.status(200).json(result);
  });
};

exports.createPost = (req, res, next) => {
  let { body, file } = req;
  if (!file) delete req.body.post_image;
  body = {
    ...body,
  };
  const sql = `INSERT INTO post (user_id, post_body, datecreate) VALUES (?,?,NOW())`;
  db.query(sql, [req.body.user_id, req.body.text], (err, result) => {
    if (!result) {
      res.status(200).json({
        message: "Une erreur est survenue",
      });
    } else {
      res.status(201).json({ message: "Post créé !" });
    }
  });

  const post_id = result.insertId;
  if (file) {
    const sqlInsertImage = `INSERT INTO images (img_url, post_id) VALUES (?, ?)`;
    db.query(sqlInsertImage, [file.filename, post_id], (err, result) => {
      if (err) {
        res.status(404).json({ err });
        throw err;
      }
      res.status(200).json(result);
    });
  } else {
    res.status(200).json(result);
  }
};

exports.updatePost = (req, res, next) => {
  const { id: postId } = req.params;
  const sqlUpdatePost = `UPDATE post SET post_body = ? WHERE post_id = ? AND user_id = ?`;
  db.query(
    sqlUpdatePost,
    [req.body.text, postId, req.body.user_id],
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

exports.deleteOnePost = (req, res, next) => {
  const { id: post_id } = req.params;
  const sql = `DELETE FROM post WHERE post_id = ?`;
  db.query(sql, [post_id], (err, result) => {
    if (err) {
      res.status(404).json({ err });
      throw err;
    }
    res.status(200).json(result);
  });
};

exports.like = (req, res, next) => {
  const { id: postId } = req.params;
  const sqlFollow = `INSERT INTO likes (liker_id, post_liked_id) VALUES (?,?)`;
  db.query(sqlFollow, [req.body.userId, postId], (err, result) => {
    if (err) {
      res.status(200).json({ message: "Post deja like" });
      return;
    }
    if (result) {
      res.status(200).json({ message: "Like ajouté !" });
    }
  });
};

exports.unlike = (req, res, next) => {
  const { id: postId } = req.params;
  const sqlFollow = `DELETE FROM likes WHERE liker_id=? AND post_liked_id=?`;
  db.query(sqlFollow, [req.body.userId, postId], (err, result) => {
    if (err) {
      res.status(200).json({ message: "Post deja unlike" });
      return;
    }
    if (result) {
      res.status(200).json({ message: "Like supprimé !" });
    }
  });
};

exports.getOneImage = (req, res, next) => {
  const { id: postId } = req.params;
  const sqlGetImage = `SELECT * FROM images WHERE post_id = ?`;
  db.query(sqlGetImage, [postId], (err, result) => {
    if (err) {
      res.status(404).json({ err });
      throw err;
    }
    if (result[0]) {
      result[0].img_url =
        req.protocol +
        "://" +
        req.get("host") +
        "/images/posts/" +
        result[0].img_url;
    }
    res.status(200).json(result);
  });
};
