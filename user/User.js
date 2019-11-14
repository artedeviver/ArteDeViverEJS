const Sequelize = require("sequelize")
const connection = require("../database/database")

const User = connection.define('users', {
    name:{
        type: Sequelize.STRING,
        allowNull:false
    },
    email:{
        type: Sequelize.STRING,
        allowNull:false
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false
    },
    responsibility:{
        type: Sequelize.STRING,
        allowNull:false
    },
    administrator:{
        type: Sequelize.BOOLEAN,
        allowNull:false
    }
})

User.sync({force:false}).then(() =>{
    console.log('Tabela de usuários criada')
})

module.exports = User