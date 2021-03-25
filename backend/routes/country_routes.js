const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const countryController = require("../controllers/country_controller");

router.post("/", countryController.createCountry);

module.exports = router;
