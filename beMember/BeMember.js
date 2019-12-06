const Sequelize = require("sequelize")
const connection = require("../database/database")

const BeMember = connection.define('beMember', {
    name:{
        type: Sequelize.STRING,
        allowNull:false
    },
    desc:{
        type: Sequelize.TEXT,
        allowNull:false
    },
    img:{
        type: Sequelize.TEXT,
        allowNull: false
    }
})

BeMember.sync({force:false}).then(() =>{
    console.log('Tabela de mebros criada')
})

module.exports = BeMember