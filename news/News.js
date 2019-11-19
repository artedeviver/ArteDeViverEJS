const Sequelize = require("sequelize")
const connection = require("../database/database")

const News = connection.define('news', {
    title:{
        type: Sequelize.STRING,
        allowNull:false
    },
    bodyNews:{
        type: Sequelize.TEXT,
        allowNull:false
    },
    titleImage:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

News.sync().then(() =>{
    console.log('Tabela de notícias criada')
})

module.exports = News