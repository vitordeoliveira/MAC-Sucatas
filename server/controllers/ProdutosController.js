const { Produtos } = require("../../models");

module.exports = {
  async index(req, res) {
    try {
      const produtos = await Produtos.findAll();
      return res.json(produtos);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ msg: "Some error occurred!" });
    }
  },

  async store(req, res) {
    const { EmpresasId } = req.user;
    const { name, stock } = req.body;

    const [produto, created] = await Produtos.findOrCreate({
      where: {
        name,
        EmpresasId
      },
      defaults: {
        EmpresasId,
        stock
      }
    });

    if (!created) {
      return res.status(400).json({ msg: "Este produto já existe na tabela" });
    }

    return res.json(produto);
  },

  async update(req, res) {
    const { EmpresasId } = req.user;
    const { produto_id } = req.params;
    const { stock } = req.body;

    const produto = await Produtos.findByPk(produto_id);

    if (!produto) {
      return res.status(404).json({ msg: "Produto nao existe" });
    }

    if (!(produto.EmpresasId === EmpresasId)) {
      return res
        .status(403)
        .json({ msg: "Esse produto não pode ser atualizado com esta conta" });
    }

    produto.stock = stock;
    produto.save();

    return res.json(produto);
  },

  async delete(req, res) {
    const { EmpresasId } = req.user;
    const { produto_id } = req.params;

    const produto = await Produtos.findByPk(produto_id);

    if (!produto) {
      return res.status(404).json({ msg: "Produto nao existe" });
    }

    if (!(produto.EmpresasId === EmpresasId)) {
      return res
        .status(403)
        .json({ msg: "Esse produto não pode ser atualizado com esta conta" });
    }

    produto.destroy();

    return res.json(produto);
  }
};
