const mongoose = require("mongoose");

const channelModel = mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  },
});

module.exports = mongoose.model("channel", channelModel);
