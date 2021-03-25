const ContactModel = require("../models/contact_model");
const CountryModel = require("../models/country_model");
const CompanyModel = require("../models/company_model");
const { validationResult } = require("express-validator");

exports.createContact = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { country, company } = req.body;

    const findCountry = CountryModel.findById(country);
    const findCompany = CompanyModel.findById(company);
    if (!findCountry || !findCompany) {
      return res.status(404).json({ msg: "Country or company does not exist" });
    }

    const contact = new ContactModel(req.body);
    await contact.save();
    res.json(contact);
  } catch (error) {
    console.log(error);
    res.status(500).send("There's been en error");
  }
};
