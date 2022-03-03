const express = require("express");
const router = express.Router();
const commentCtrl = require("../controllers/comment.controller");
const auth = require("../middleware/auth.middleware");

// Comments CRUD
router.get("/", auth, commentCtrl.getAllComments);
router.get("/:id", auth, commentCtrl.getOneComment);
router.post("/", auth, commentCtrl.createComment);
router.delete("/:id", auth, commentCtrl.deleteOneComment);
router.put("/:id", auth, commentCtrl.updateComment);

module.exports = router;
