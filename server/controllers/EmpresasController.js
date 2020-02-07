const { Empresas } = require("../../models");

module.exports = {
  async index(req, res) {
    try {
      const empresas = await Empresas.findAll();
      return res.json(empresas);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ msg: "Some error occurred!" });
    }
  },

  async store(req, res) {
    const { name } = req.body;

    const empresa = await Empresas.create({ name });

    return res.json(empresa);
  }
};
