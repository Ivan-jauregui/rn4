const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Jugador = require('./Jugador');

const Estadistica = sequelize.define('Estadistica', {
  goles: DataTypes.INTEGER,
  tarjetas: DataTypes.INTEGER,
});

Estadistica.belongsTo(Jugador);

module.exports = Estadistica;
