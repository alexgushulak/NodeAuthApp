const express = require("express");
const router = express.Router();

const { register, login, logout, forgotpassword, resetpassword } = require("../controllers/auth"); // import the register function from the auth controller

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/forgotpassword").post(forgotpassword);
router.route("/resetpassword/:resetToken").put(resetpassword);

module.exports = router; // export the router