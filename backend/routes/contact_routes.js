const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const contactController = require("../controllers/contact_controller");

router.post("/", contactController.createContact);

module.exports = router;
