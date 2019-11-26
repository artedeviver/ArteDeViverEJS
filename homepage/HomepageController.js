const express = require("express")
const router = express.Router()
const Courses = require("../courses/Courses")
const NewsLetter = require("../homepage/Homepage")

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

//SALVAR DADOS DO FORMULÁRIO - NEWSLETTER
router.post("/homepage/newsletter/save", (req, res) => {

    let name = req.body.name
    let email = req.body.email

    NewsLetter.create({
        name: name,
        email: email

    }).then(() => {
        res.redirect("/")
    }).catch((error) => {
        res.send(error)
    })
})

module.exports = router