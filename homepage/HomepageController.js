const express = require("express")
const router = express.Router()
const Courses = require("../courses/Courses")
const NewsLetter = require("../homepage/Homepage")
const News = require("../news/News")
const PrincipalArea = require("../principalArea/PrincipalArea")


//MOSTRAR OS CURSOS PUBLICADOS
router.get("/courses", (req, res) => {
    Courses.findAll({
        raw: true, order: [['id', 'DESC']]
    }).then(courses => {
        res.render("./homepage/coursesGeneral", { courses: courses })
    })
})

//MOSTRAR AREA PRINCIPAL ATUALIZADA
router.get("/", (req, res) => {

    const courses = Courses.findAll({
        raw: true, order: [['id', 'DESC']]
    }).then(courses => {
        res.render("index", { courses: courses, success: req.query.success})
    })
    const principal = PrincipalArea.findByPk(1)

    Promise
        .all([courses, principal])
        .then(responses => {
            res.render("index", { principalArea: responses[1], courses: responses[0] })
        })
        .catch(err => {
            console.log('**********ERROR RESULT****************');
            console.log(err);
          
        })
})

//ROTA PARA QUEM SOMOS 
router.get("/WhoWeAre", (req, res) => {
    res.render("./homepage/quemSomos")
})

router.get("/news", (req, res) => {
    News.findAll({
        raw: true, order: [['id', 'DESC']]
    }).then(news => {
        res.render("./homepage/newsGeneral", { news: news })
    })
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
        res.redirect("/?success=true")
    }).catch((error) => {
        res.send(error)
    })
})

module.exports = router