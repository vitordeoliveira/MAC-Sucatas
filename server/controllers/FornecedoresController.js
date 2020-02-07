const { Fornecedores } = require("../../models");

module.exports = {
  async index(req, res) {
    try {
      const fornecedores = await Fornecedores.findAll();
      return res.json(fornecedores);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ msg: "Some error occurred!" });
    }
  },

  async store(req, res) {
    const { name } = req.body;

    const fornecedores = await Fornecedores.create({ name });

    return res.json(fornecedores);
  }
};
