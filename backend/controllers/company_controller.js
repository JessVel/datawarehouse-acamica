const CompanyModel = require("../models/company_model");
const { validationResult } = require("express-validator");

exports.createCompany = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { name } = req.body;
    const findCompany = CompanyModel.findOne(name);
    if (!findCompany) {
      return res.status(400).json({ msg: "The company already exists" });
    }

    const company = new CompanyModel(req.body);
    await company.save();
    res.json(company);
  } catch (error) {
    console.log(error);
    res.status(500).send("There's been en error");
  }
};
