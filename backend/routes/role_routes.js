const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const roleController = require("../controllers/role_controller");

router.post("/", roleController.createRole);

module.exports = router;
