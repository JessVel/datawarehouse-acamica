const mongoose = require("mongoose");

const CompanyModel = mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  },
  country: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "country",
  },
});

module.exports = mongoose.model("company", CompanyModel);
