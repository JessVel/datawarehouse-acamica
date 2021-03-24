const express = require("express");
const router = express.Router();
const userController = require("../controllers/user_controller");
const { check } = require("express-validator");

router.post(
  "/",
  [check("user", "User is required").not().isEmpty(), check("email", "Provide a valid email").isEmail(), check("password", "Password must have at least 6 caracters").isLength({ min: 6 })],
  userController.createUser
);

router.get("/", userController.getUser);

module.exports = router;
