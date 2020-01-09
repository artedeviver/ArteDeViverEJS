const Sequelize = require("sequelize")
const connection = require("../database/database")

const Courses = connection.define('courses', {
    title: {
        type: Sequelize.STRING,
        allowNull: true
    },
    descCourse: {
        type: Sequelize.STRING,
        allowNull: true
    },
    bodyCourse: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    imgCourse: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    featured: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    imgFeatured: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    impactDesc: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    impactImg1: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    impactImg2: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    impactImg3: {
        type: Sequelize.TEXT,
        allowNull: true
    }
})

Courses.sync({ force: false }).then(() => {
    console.log('Tabela de cursos criada')
})

module.exports = Courses