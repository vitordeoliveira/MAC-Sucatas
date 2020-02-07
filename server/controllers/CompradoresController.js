const { Compradores, Vendas, Produtos } = require("../../models");

module.exports = {
  async index(req, res) {
    try {
      const compradores = await Compradores.findAll({
        attributes: ["id", "name"],
        include: {
          model: Vendas,
          as: "Vendas",
          attributes: ["id", "value", "amount"],
          include: [
            {
              model: Produtos,
              attributes: ["id", "name"]
            }
          ]
        }
      });
      return res.json(compradores);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ msg: "Some error occurred!" });
    }
  },

  async store(req, res) {
    const { name } = req.body;

    const comprador = await Compradores.create({ name });

    return res.json(comprador);
  }
};
