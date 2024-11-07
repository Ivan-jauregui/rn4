const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('torneo_futbol', 'usuario', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
