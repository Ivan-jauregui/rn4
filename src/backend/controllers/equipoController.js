const Equipo = require('../models/Equipo');

exports.list = async (req, res) => {
  const equipos = await Equipo.findAll();
  res.json(equipos);
};

exports.create = async (req, res) => {
  const equipo = await Equipo.create(req.body);
  res.json(equipo);
};

exports.update = async (req, res) => {
  const equipo = await Equipo.findByPk(req.params.id);
  equipo.update(req.body);
  res.json(equipo);
};

exports.delete = async (req, res) => {
  const equipo = await Equipo.findByPk(req.params.id);
  equipo.destroy();
  res.json({ message: 'Equipo eliminado' });
};
