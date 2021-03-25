const CountryModel = require("../models/country_model");
const { validationResult } = require("express-validator");

exports.createCountry = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { name } = req.body;
    const findCountry = CountryModel.findOne(name);
    if (!findCountry) {
      return res.status(400).json({ msg: "The country already exists" });
    }

    const country = new CountryModel(req.body);
    await country.save();
    res.json(country);
  } catch (error) {
    console.log(error);
    res.status(500).send("There's been en error");
  }
};
