const ChannelModel = require("../models/channel_model");
const { validationResult } = require("express-validator");

exports.createChannel = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { name } = req.body;
    const findChannel = ChannelModel.findOne(name);
    if (!findChannel) {
      return res.status(400).json({ msg: "The channel already exists" });
    }

    const channel = new ChannelModel(req.body);
    await channel.save();
    res.json(channel);
  } catch (error) {
    console.log(error);
    res.status(500).send("There's been en error");
  }
};
