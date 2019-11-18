const express = require("express")
const router = express.Router()
const News = require("./News")

// app.get("/dashboard-noticias", (req,res) => {
//     res.render("./dashboard/news/index")
// })

// app.get ("/dashboard/news/new", (req,res) =>{
//     res.render("./dashboard/news/new")
// })

router.get("/dashboard/news", (req, res) => {
    News.findAll().then(news => {
        res.render("dashboard/news/index", { news: news })
    })
})


//SALVAR DADOS DO FORMULÁRIO - ADD NEWS
router.post("/dashboard/news/save", (req, res) => {

    let title = req.body.title
    let bodyNews = req.body.bodyNews
    let titleImage = req.body.titleImage

    News.create({
        title: title,
        bodyNews: bodyNews,
        titleImage: titleImage
    }).then(() => {
        res.redirect("./dashboard/news")
    }).catch((error) => {
        res.send(error)
    })
})

module.exports = router