const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Equipo = require('./Equipo');

const Partido = sequelize.define('Partido', {
  fecha: DataTypes.DATE,
  lugar: DataTypes.STRING,
  resultado: DataTypes.STRING,
});

Partido.belongsTo(Equipo, { as: 'equipo1' });
Partido.belongsTo(Equipo, { as: 'equipo2' });

module.exports = Partido;
