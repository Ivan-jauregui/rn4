const Estadistica = require('../models/Estadistica');

exports.list = async (req, res) => {
  const estadisticas = await Estadistica.findAll();
  res.json(estadisticas);
};

exports.create = async (req, res) => {
  const estadistica = await Estadistica.create(req.body);
  res.json(estadistica);
};

exports.update = async (req, res) => {
  const estadistica = await Estadistica.findByPk(req.params.id);
  estadistica.update(req.body);
  res.json(estadistica);
};

exports.delete = async (req, res) => {
  const estadistica = await Estadistica.findByPk(req.params.id);
  estadistica.destroy();
  res.json({ message: 'Estadística eliminada' });
};
