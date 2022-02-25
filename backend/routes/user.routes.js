const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user.controller");
const auth = require("../middleware/auth.middleware");
const upload = require("../middleware/multer-config");

router.get("/:id", auth, userCtrl.getOneUser);
router.get("/image/:id", auth, userCtrl.getProfilPicture);
router.put("/:id", auth, upload.single("profil_image"), userCtrl.updateOneUser);
router.delete("/:id", auth, userCtrl.deleteUser);
router.put("/follow/:id", auth, userCtrl.follow);
router.delete("/unfollow/:id", auth, userCtrl.unfollow);

module.exports = router;
