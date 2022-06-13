const Sequelize = require("sequelize");
require('dotenv').config();
const sequelize = new Sequelize({
    database : process.env.database,
    username : process.env.username,
    password : process.env.password,
    dialect : process.env.dialect
});

module.exports = sequelize;