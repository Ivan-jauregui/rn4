const Usuario = require('../models/Usuario');
const auth = require('../config/auth');

exports.list = async (req, res) => {
  const usuarios = await Usuario.findAll();
  res.json(usuarios);
};

exports.register = async (req, res) => {
  const usuario = await Usuario.create(req.body);
  res.json(usuario);
};

exports.login = async (req, res) => {
  const usuario = await Usuario.findOne({ where: { email: req.body.email } });
  if (!usuario || !(await usuario.comparePassword(req.body.password))) {
    return res.status(401).json({ message: 'Credenciales incorrectas' });
  }
  res.json({ token: auth.generateToken(usuario) });
};
