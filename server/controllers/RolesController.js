const { Roles } = require("../../models");

module.exports = {
  async index(req, res) {
    try {
      const roles = await Roles.findAll();
      return res.json(roles);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ msg: "Some error occurred!" });
    }
  },

  async store(req, res) {
    const { name } = req.body;

    const roles = await Roles.create({ name });

    return res.json(roles);
  }
};
