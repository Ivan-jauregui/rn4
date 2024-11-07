const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Equipo = sequelize.define('Equipo', {
  nombre: DataTypes.STRING,
  escudo: DataTypes.STRING,
});

module.exports = Equipo;
