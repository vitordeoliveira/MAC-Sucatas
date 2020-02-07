const { Vendas, Produtos } = require("../../models");

module.exports = {
  async index(req, res) {
    try {
      const vendas = await Vendas.findAll();
      return res.json(vendas);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ msg: "Some error occurred!" });
    }
  },

  async store(req, res) {
    try {
      const { id } = req.user;
      const { CompradoresId, ProdutosId, value, amount } = req.body;

      const produto = await Produtos.findByPk(ProdutosId);

      if (!produto) {
        return res
          .status(404)
          .json({ msg: "Este produto nao esta cadastrado" });
      }

      const vendas = await Vendas.create({
        UsersId: id,
        CompradoresId,
        ProdutosId,
        value,
        amount
      });

      //Definindo a quantidade(Kg) em estoque
      produto.stock = produto.stock - amount;

      //Definindo o Balanco liquido
      produto.balance = Number(produto.balance) + value * amount;

      //Definindo o Balanco do estoque
      produto.balanceStock =
        Number(produto.balanceStock) - amount * Number(produto.compra);

      //Definindo o valor medio de venda
      if (Number(produto.venda) === 0) {
        produto.venda = value;
      } else {
        produto.venda = (Number(produto.venda) + value) / 2;
      }

      produto.save();

      return res.json({ vendas, produto });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        msg:
          "Algum erro aconteceu, tente novamente ou entre em contato com o desenvolvedor"
      });
    }
  }
};
