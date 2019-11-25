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
        type: Sequelize.TEXT,
        allowNull: false
    }
})

News.sync({force:false}).then(() =>{
    console.log('Tabela de notícias criada')
})

module.exports = News