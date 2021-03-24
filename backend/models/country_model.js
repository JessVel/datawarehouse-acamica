const mongoose = require("mongoose");

const CountryModel = mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  },
  region: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "region",
  },
});

module.exports = mongoose.model("country", CountryModel);
