const Sequelize = require("sequelize")
const connection = require("../database/database")

const News = connection.define('news', {
    title:{
        type: Sequelize.STRING,
        allowNull:false
    },
    body:{
        type: Sequelize.TEXT,
        allowNull:false
    },
    image:{
        type: Sequelize.STRING,
        allowNull: false
    },
})

News.sync({force:false}).then(() =>{
    console.log('Tabela de notícias criada')
})

module.exports = News