const express = require("express")
const router = express.Router()
const Courses = require("../courses/Courses")

// //ROTAS PARA PROTEJOS
// router.get("/courses", (req, res) => {
//     res.render("./homepage/coursesGeneral")
// })

//MOSTRAR OS CURSOS PUBLICADOS
router.get("/courses", (req, res) => {
    Courses.findAll({
        raw: true, order: [['id', 'DESC']]
    }).then(courses => {
        res.render("./homepage/coursesGeneral", { courses: courses })
    })
})

//ROTA PARA QUEM SOMOS 
router.get("/WhoWeAre", (req, res) => {
    res.render("./homepage/quemSomos")
})

//ROTA PARA NOTÍCIAS
router.get("/news", (req, res) => {
    res.render("./homepage/newsGeneral")
})

//ROTA PARA SEJA MEMBRO
router.get("/beaMember", (req, res) => {
    res.render("./homepage/sejaMembro")
})

module.exports = router