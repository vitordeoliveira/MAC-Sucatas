const { Compras, Produtos } = require("../../models");

module.exports = {
  async index(req, res) {
    try {
      const compras = await Compras.findAll();
      return res.json(compras);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ msg: "Some error occurred!" });
    }
  },

  async store(req, res) {
    try {
      const { id } = req.user;
      const { FornecedoresId, ProdutosId, value, amount } = req.body;

      const produto = await Produtos.findByPk(ProdutosId);

      if (!produto) {
        return res
          .status(404)
          .json({ msg: "Este produto nao esta cadastrado" });
      }

      const compra = await Compras.create({
        UsersId: id,
        FornecedoresId,
        ProdutosId,
        value,
        amount
      });

      //Definindo a quantidade(Kg) em estoque
      produto.stock = produto.stock + amount;
      //Definindo o Balanco do estoque
      produto.balanceStock = Number(produto.balanceStock) + value * amount;
      //Definindo o valor medio de compra
      if (Number(produto.compra) === 0) {
        produto.compra = value;
      } else {
        produto.compra = (Number(produto.compra) + value) / 2;
      }
      produto.save();

      return res.json({ compra, produto });
    } catch (error) {
      return res.status(500).json({
        msg:
          "Algum erro aconteceu, tente novamente ou entre em contato com o desenvolvedor"
      });
    }
  }
};
