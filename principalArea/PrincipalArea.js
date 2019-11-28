const Sequelize = require("sequelize")
const connection = require("../database/database")

const PrincipalArea = connection.define('principal_Area', {
    title:{
        type: Sequelize.STRING,
        allowNull:false
    },
    imgBackground:{
        type: Sequelize.TEXT,
        allowNull:false
    }
})

PrincipalArea.sync({force:false}).then(() =>{
    console.log('Tabela da area principal criada')
})

module.exports = PrincipalArea