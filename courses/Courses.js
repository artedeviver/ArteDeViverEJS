const Sequelize = require("sequelize")
const connection = require("../database/database")

const Courses = connection.define('courses', {
    title:{
        type: Sequelize.STRING,
        allowNull:false
    },
    bodyCourse:{
        type: Sequelize.TEXT,
        allowNull:false
    },
    imgCourse:{
        type: Sequelize.STRING,
        allowNull: false
    },
    featured:{
        type: Sequelize.TEXT,
        allowNull:false
    },
    imgFeatured:{
        type: Sequelize.STRING,
        allowNull:false
    },
    impactDesc:{
        type: Sequelize.TEXT,
        allowNull:false
    },
    impactImg1:{
        type: Sequelize.STRING,
        allowNull:false
    },
    impactImg2:{
        type: Sequelize.STRING,
        allowNull:false
    },
    impactImg3:{
        type: Sequelize.STRING,
        allowNull:false
    }
})

Courses.sync({force:false}).then(() =>{
    console.log('Tabela de cursos criada')
})

module.exports = Courses