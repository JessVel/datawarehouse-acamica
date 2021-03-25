const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const channelController = require("../controllers/channel_controller");

router.post("/", channelController.createChannel);

module.exports = router;
