const Sequelize = require("sequelize")

const connection = new Sequelize('arte_de_viver_bd', 'root', 'artedeviver', {
    host: '10.10.104.92',
    dialect: 'mysql'
})

module.exports = connection