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
        type: Sequelize.TEXT,
        allowNull: false
    },
    featured:{
        type: Sequelize.TEXT,
        allowNull:false
    },
    imgFeatured:{
        type: Sequelize.TEXT,
        allowNull:false
    },
    impactDesc:{
        type: Sequelize.TEXT,
        allowNull:false
    },
    impactImg1:{
        type: Sequelize.TEXT,
        allowNull:false
    },
    impactImg2:{
        type: Sequelize.TEXT,
        allowNull:false
    },
    impactImg3:{
        type: Sequelize.TEXT,
        allowNull:false
    }
})

Courses.sync({force:false}).then(() =>{
    console.log('Tabela de cursos criada')
})

module.exports = Courses