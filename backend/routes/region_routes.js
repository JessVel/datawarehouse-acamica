const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const regionController = require("../controllers/region_controller");

router.post("/", regionController.createRegion);

module.exports = router;
