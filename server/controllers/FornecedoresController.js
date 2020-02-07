const { Fornecedores, Compras, Produtos } = require("../../models");

module.exports = {
  async index(req, res) {
    try {
      const fornecedores = await Fornecedores.findAll({
        attributes: ["id", "name"],
        include: [
          {
            model: Compras,
            as: "Compras",
            attributes: ["id", "value", "amount"],
            include: [
              {
                model: Produtos,
                attributes: ["id", "name"]
              }
            ]
          }
        ]
      });
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
