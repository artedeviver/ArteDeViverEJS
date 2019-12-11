const Sequelize = require("sequelize")

const connection = new Sequelize('arte_de_viver_bd', 'root', 'artedeviver', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection