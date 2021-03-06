const express = require("express")
const router = express.Router()
const Courses = require("../courses/Courses")
const NewsLetter = require("../homepage/Homepage")
const News = require("../news/News")
const PrincipalArea = require("../principalArea/PrincipalArea")
const BeMember = require("../beMember/BeMember")
const Partners = require("../partners/Partners")

//MOSTRAR OS CURSOS PUBLICADOS
router.get("/courses", (req, res) => {
    Courses.findAll({
        raw: true, order: [['id', 'DESC']]
    }).then(courses => {
        res.render("./homepage/coursesGeneral", { courses: courses})
    })
})

//MOSTRAR AREA PRINCIPAL ATUALIZADA
router.get("/", async (req, res) => {

    const courses = await Courses.findAll({
        raw: true, order: [['id', 'DESC']]
    })

    const latestNews = await News.findAll({
        raw: true, limit: 4, order: [['id', 'DESC']]
    })

    const beMember = await BeMember.findAll({
        raw: true, order: [['id', 'DESC']]
    })

    const partners = await Partners.findByPk(1)

    const principalArea = await PrincipalArea.findByPk(1)


    res.render('index', {principalArea, courses, latestNews, beMember, partners, success: req.query.success, successRegister: req.query.successRegister})

})

router.get("/news", async (req, res) => {

    const news = await News.findAll({
        raw: true, order: [['id', 'DESC']]
    })

    const lastNews = await News.findAll({
        raw: true, limit: 1, order: [['id', 'DESC']]
    })

    latestNews = lastNews.length > 0 ? lastNews[0] : { title:'Nehuma notícia postada'}

    res.render("./homepage/newsGeneral", { news, lastNews:latestNews })
})

//ROTA PARA QUEM SOMOS 
router.get("/WhoWeAre", (req, res) => {
    res.render("./homepage/quemSomos")
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