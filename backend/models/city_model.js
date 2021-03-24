const mongoose = require("mongoose");

const CityModel = mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  },
  country: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "coutry",
  },
});

module.exports = mongoose.model("city", CityModel);
