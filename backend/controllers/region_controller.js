const RegionModel = require("../models/region_model");
const { validationResult } = require("express-validator");

exports.createRegion = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { name } = req.body;
    const findRegion = RegionModel.findOne(name);
    if (!findRegion) {
      return res.status(400).json({ msg: "The Region already exists" });
    }

    const region = new RegionModel(req.body);
    await region.save();
    res.json(region);
  } catch (error) {
    console.log(error);
    res.status(500).send("There's been en error");
  }
};
