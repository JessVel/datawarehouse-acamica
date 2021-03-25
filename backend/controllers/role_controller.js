const RoleModel = require("../models/role_model");
const { validationResult } = require("express-validator");

exports.createRole = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name } = req.body;
  const findRole = RoleModel.findOne(name);
  if (!findRole) {
    return res.status(400).json({ msg: "The role already exists" });
  }

  const role = new RoleModel(req.body);
  await role.save();
  res.json(role);

  try {
  } catch (error) {
    console.log(error);
    res.status(500).send("There's been en error");
  }
};
