const { Users } = require("../../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

module.exports = {
  async login(req, res) {
    try {
      const { username, password } = req.body;
      const payload = await Users.findOne({
        where: { username },
        attributes: [
          "id",
          "name",
          "username",
          "EmpresasId",
          "RolesId",
          "password"
        ]
      });

      if (!payload) {
        return res.status(400).json({ msg: "Usuario incorreto ou nao existe" });
      }

      const valid = bcrypt.compareSync(password, payload.password);

      if (!valid) {
        return res.status(400).json({ msg: "Senha invalida" });
      }

      payload.password = undefined;

      jwt.sign(
        { payload },
        process.env.SECRET,
        { expiresIn: "30d", subject: payload.name },
        (err, token) => {
          token = "Bearer " + token;
          return res.status(200).json({ token });
        }
      );
    } catch (error) {
      console.log(error);
      return res.status(400).json({ msg: "Some error occurred!" });
    }
  },

  async register(req, res) {
    try {
      const {
        EmpresasId,
        RolesId,
        name,
        username,
        password,
        password2
      } = req.body;

      const checkUser = await Users.findOne({
        where: {
          username
        }
      });

      if (checkUser) {
        return res.status(400).json({ msg: "Usuario ja existe" });
      }

      const hash = bcrypt.hashSync(password, 10);

      const user = await Users.create({
        EmpresasId,
        RolesId,
        name,
        username,
        password: hash
      });

      return res.json(user);
    } catch (error) {
      return res
        .status(400)
        .json({ msg: "Erro na criacao tente novamente ou entre em contato" });
    }
  }
};
