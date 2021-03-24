const mongoose = require("mongoose");

const RoleModel = mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  },
});

module.exports = mongoose.model("role", RoleModel);
