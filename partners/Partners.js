const Sequelize = require("sequelize")
const connection = require("../database/database")

const Partners = connection.define('partners', {
    img1: {
        type: Sequelize.TEXT,
        allowNull: false
    }, img2: {
        type: Sequelize.TEXT,
        allowNull: false
    }, img3: {
        type: Sequelize.TEXT,
        allowNull: false
    }, img4: {
        type: Sequelize.TEXT,
        allowNull: false
    }, img5: {
        type: Sequelize.TEXT,
        allowNull: false
    }, img6: {
        type: Sequelize.TEXT,
        allowNull: false
    },

})

Partners.sync({force:false}).then(() =>{
    console.log('Tabela de Partners criada')
})

module.exports = Partners