const express = require("express")
const router = express.Router()
const News = require("./News")

//ROTA PARA PÁGINA DE ADD NOVA NOTÍCIA
router.get("/dashboard/news/new", (req, res) => {
    res.render("./dashboard/news/new")
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
        res.redirect("/dashboard/news?success=true")
    }).catch((error) => {
        res.send(error)
    })
})

// MOSTRAR TODAS AS NOTÍCIAS JA CADASTRADAS 
// EM ORDEM DESCRECENTE
router.get("/dashboard/news", (req, res) => {
    News.findAll({
        raw: true, order: [
            ['id', 'DESC']
        ]
    }).then(news => {
        res.render("dashboard/news/index", { news: news, success: req.query.success, successEdit: req.query.successEdit })
    })
})

//DELETAR NOTICIA
router.post("/dashboard/news/delete", (req, res) => {
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
router.get("/dashboard/news/edit/:id", (req, res) => {
    let id = req.params.id

    if (isNaN(id)) {
        res.redirect("./dashboard/news")
    }

    News.findByPk(id).then(news => {
        if (news != undefined) {
            res.render("./dashboard/news/edit", { news: news })
        } else {
            res.redirect("./dashboard/news")
        }
    }).catch(error => {
        res.redirect("./dashboard/news")
    })
})

//SALVAR DADOS DO FORMULÁRIO - UPDATE 
router.post("/dashboard/news/update", (req, res) => {
    let id = req.body.id
    let title = req.body.title
    let bodyNews = req.body.bodyNews
    let titleImage = req.body.titleImage

    News.update({
        title: title,
        bodyNews: bodyNews,
        titleImage: titleImage
    }, {
        where: { id: id }
    }).then(() => {
        res.redirect("/dashboard/news?successEdit=true")
    })
})

module.exports = router