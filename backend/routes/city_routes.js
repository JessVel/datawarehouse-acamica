const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const cityController = require("../controllers/city_controller");

router.post("/", cityController.createCity);

module.exports = router;
