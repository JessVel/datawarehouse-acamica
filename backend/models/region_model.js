const mongoose = require("mongoose");

const RegionSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  },
});

module.exports = mongoose.model("region", RegionSchema);
