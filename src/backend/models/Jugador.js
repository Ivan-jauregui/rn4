const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Equipo = require('./Equipo');

const Jugador = sequelize.define('Jugador', {
  nombre: DataTypes.STRING,
  apellido: DataTypes.STRING,
  edad: DataTypes.INTEGER,
  posicion: DataTypes.STRING,
  numero: DataTypes.INTEGER,
});

Jugador.belongsTo(Equipo);

module.exports = Jugador;
