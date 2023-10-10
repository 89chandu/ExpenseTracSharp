const Sequelize = require('sequelize');
require('dotenv').config(); // Load environment variables from .env

const sequelize = new Sequelize('track_expense', process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;



