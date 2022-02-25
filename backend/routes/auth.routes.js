const express = require("express");
const router = express.Router();
const authCtrl = require("../controllers/auth.controller");

router.post("/Signup", authCtrl.signup);
router.post("/Login", authCtrl.login);
router.get("/Logout", authCtrl.logout);

module.exports = router;
