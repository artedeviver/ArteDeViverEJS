const express = require("express")
const router = express.Router()

//ROTAS PARA PROTEJOS
router.get("/coursesName", (req, res) => {
    res.render("./homepage/courseSpecific")
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