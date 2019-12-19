const Sequelize = require("sequelize")
const connection = require("../database/database")

const Members = connection.define('members', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    interest: {
        type: Sequelize.STRING,
        allowNull: false
    },
    typeActivity: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    projInsp: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    materialDonate: {
        type: Sequelize.STRING,
        allowNull: false
    },
    valueDonate: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    nameInst: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telephone: {
        type: Sequelize.CHAR,
        allowNull: false
    },
    reason: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Members.sync({ force: false }).then(() => {
    console.log('Tabela de membros criada')
}).catch((error) => {
    console.log(error)
})

module.exports = Members