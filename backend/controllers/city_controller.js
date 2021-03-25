const CityModel = require("../models/city_model");
const { validationResult } = require("express-validator");
const city_model = require("../models/city_model");

exports.createCity = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { name } = req.body;
    const findCity = CityModel.findOne(name);
    if (!findCity) {
      return res.status(400).json({ msg: "The city already exists" });
    }

    const city = new CityModel(req.body);
    await city.save();
    res.json(city);
  } catch (error) {
    console.log(error);
    res.status(500).send("There's been en error");
  }
};
