const Jugador = require('../models/Jugador');

exports.list = async (req, res) => {
  const jugadores = await Jugador.findAll();
  res.json(jugadores);
};

exports.create = async (req, res) => {
  const jugador = await Jugador.create(req.body);
  res.json(jugador);
};

exports.update = async (req, res) => {
  const jugador = await Jugador.findByPk(req.params.id);
  jugador.update(req.body);
  res.json(jugador);
};

exports.delete = async (req, res) => {
  const jugador = await Jugador.findByPk(req.params.id);
  jugador.destroy();
  res.json({ message: 'Jugador eliminado' });
};
