const mongoose = require("mongoose");

const ContactModel = mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  },
  email: {
    type: String,
    require: true,
    trim: true,
  },
  country: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "country",
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "company",
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("contact", ContactModel);
