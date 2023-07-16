const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Satya0*123', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
