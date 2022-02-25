const express = require("express");
const router = express.Router();
const postCtrl = require("../controllers/post.controller");
const auth = require("../middleware/auth.middleware");
const upload = require("../middleware/multer-config");

router.get("/", auth, postCtrl.getAllPosts);
router.get("/:id", auth, postCtrl.getOnePost);
router.post("/", auth, postCtrl.createPost);
router.delete("/:id", auth, postCtrl.deleteOnePost);
router.put("/:id", auth, postCtrl.updatePost);

router.get("/image/:id", auth, postCtrl.getOneImage);

router.put("/post-like/:id", auth, postCtrl.like);
router.delete("/post-unlike/:id", auth, postCtrl.unlike);

module.exports = router;
