const Sequelize = require("sequelize")
const connection = require("../database/database")

const Members = connection.define('members', {
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    interest:{
        type: Sequelize.STRING,
        allowNull: false
    },
    age:{
        type: Sequelize.INTEGER,
        allowNull: true
    },
    company:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    telephone:{
        type: Sequelize.CHAR,
        allowNull: false
    },
    reason:{
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Members.sync({force:false}).then(() =>{
    console.log('Tabela de membros criada')
}).catch((error) =>{
    console.log(error)
})

module.exports = Members