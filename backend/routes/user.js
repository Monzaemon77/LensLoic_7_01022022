const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");

router.post("/Signup", userCtrl.signup);
router.post("/Login", userCtrl.login);

module.exports = router;
