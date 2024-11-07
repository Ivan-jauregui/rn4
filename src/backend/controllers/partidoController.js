const Partido = require('../models/Partido');

exports.list = async (req, res) => {
  const partidos = await Partido.findAll();
  res.json(partidos);
};

exports.create = async (req, res) => {
  const partido = await Partido.create(req.body);
  res.json(partido);
};

exports.update = async (req, res) => {
  const partido = await Partido.findByPk(req.params.id);
  partido.update(req.body);
  res.json(partido);
};

exports.delete = async (req, res) => {
  const partido = await Partido.findByPk(req.params.id);
  partido.destroy();
  res.json({ message: 'Partido eliminado' });
};
