const jwt = require("jsonwebtoken");
const dbc = require("../config/db");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
    const { id: userId } = decodedToken;
    req.auth = { userId };
    let db = dbc.getDB();
    const sql = `SELECT id FROM user WHERE id = ${userId}`;
    db.query(sql, (err, result) => {
      if (err) {
        res.status(204).json(err);
      } else {
        next();
      }
    });
  } catch {
    res.status(401).json({
      error: new Error("Invalid request!"),
    });
  }
};
