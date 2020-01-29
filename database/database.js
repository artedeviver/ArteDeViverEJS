const Sequelize = require("sequelize")

const connection = new Sequelize('arte_de_viver_bd', 'root', 'artedeviver', {
    host: 'mysql669.umbler.com',
    dialect: 'mysql'
})

module.exports = connection