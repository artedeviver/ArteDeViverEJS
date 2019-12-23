const express = require("express")
const router = express.Router()
const News = require("./News")
const adminAuth = require('../middlewares/adminAuth')

//ROTA NOTÍCIA ESPECIFICA 
router.get("/news/:title/:id", (req, res) => {

    let id = req.params.id

    if (isNaN(id)) {
        res.redirect("homepage/news")
    }

    News.findByPk(id).then(news => {
        if (news != undefined) {
            res.render("homepage/newsSpecific", { news: news , admin: req.session.user.administrator})
        } else {
            res.redirect("homepage/news")
        }
    }).catch(error => {
        res.redirect("news")
    })
})

//ROTA PARA PÁGINA DE ADD NOVA NOTÍCIA
router.get("/dashboard/news/new", adminAuth, (req, res) => {
    res.render("./dashboard/news/new" , {admin: req.session.user.administrator})
})

//SALVAR DADOS DO FORMULÁRIO - ADD NEWS
router.post("/dashboard/news/save", adminAuth,  (req, res) => {

    let title = req.body.title
    let newsDesc = req.body.newsDesc
    let bodyNews = req.body.bodyNews
    let titleImage = req.body.titleImage

    News.create({
        title: title,
        newsDesc : req.body.newsDesc,
        bodyNews: bodyNews,
        titleImage: titleImage
    }).then(() => {
        res.redirect("/dashboard/news?success=true")
    }).catch((error) => {
        res.send(error)
    })
})

// MOSTRAR TODAS AS NOTÍCIAS JA CADASTRADAS 
// EM ORDEM DESCRECENTE
router.get("/dashboard/news", adminAuth, (req, res) => {
    News.findAll({
        raw: true, order: [
            ['id', 'DESC']
        ]
    }).then(news => {
        res.render("dashboard/news/index", { news: news, success: req.query.success, successEdit: req.query.successEdit, admin: req.session.user.administrator})
    })
})

//DELETAR NOTICIA
router.post("/dashboard/news/delete", adminAuth,  (req, res) => {
    let id = req.body.id

    if(id != undefined){
        if(!isNaN(id)){
            News.destroy({
                where: {id:id}
            }).then(() => {
                res.redirect("/dashboard/news")
            })
        }else{ //não é número
            res.redirect("/dashboard/news")
        }
    }else{ //null
        res.redirect("/dashboard/news")
    }
})

// ROTA PARA PÁGINA DE EDIÇÃO DE NOTÍCIA
router.get("/dashboard/news/edit/:id", adminAuth, (req, res) => {
    let id = req.params.id

    if (isNaN(id)) {
        res.redirect("./dashboard/news")
    }

    News.findByPk(id).then(news => {
        if (news != undefined) {
            res.render("./dashboard/news/edit", { news: news, admin: req.session.user.administrator })
        } else {
            res.redirect("./dashboard/news")
        }
    }).catch(error => {
        res.redirect("./dashboard/news")
    })
})

//SALVAR DADOS DO FORMULÁRIO - UPDATE 
router.post("/dashboard/news/update", adminAuth, (req, res) => {
    let id = req.body.id
    let title = req.body.title
    let newsDesc = req.body.newsDesc
    let bodyNews = req.body.bodyNews
    let titleImage = req.body.titleImage

    News.update({
        title: title,
        newsDesc : req.body.newsDesc,
        bodyNews: bodyNews,
        titleImage: titleImage
    }, {
        where: { id: id }
    }).then(() => {
        res.redirect("/dashboard/news?successEdit=true")
    })
})

module.exports = router