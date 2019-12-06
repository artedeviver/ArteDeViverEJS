const express = require("express")
const router = express.Router()
const BeMember = require("./BeMember")


router.get("/dashboard/home/be-member/edit", (req, res) => {
    BeMember.findAll({
        raw: true, order: [['id', 'DESC']]
    }).then(member => {
        res.render("./dashboard/home/beMember/edit", { member: member, success: req.query.success})
    })
})


router.post("/dashboard/home/be-member/update", (req, res) => {
    let id = req.body.id
    let name = req.body.name
    let bodyNews = req.body.bodyNews
    let titleImage = req.body.titleImage

    BeMember.update({
        name: name,
        desc: bodyNews,
        img: titleImage
    }, {
        where: { id: id }
    }).then(() => {
        res.redirect("/dashboard/home/be-member/edit?success=true")
    })
})


















//SALVAR EDIÇÃO DOS CAMPOS
router.post("/dashboard/home/be-member/save", (req, res) => {

    let name = req.body.name
    let bodyNews = req.body.bodyNews
    let titleImage = req.body.titleImage

    BeMember.create({
        name: name,
        desc: bodyNews,
        img: titleImage
    }).then((user) => {
        res.redirect("/dashboard/home/be-member/edit")
    }).catch((error) => {
        res.send(error)
    })
})













//EDITAR CAMPOS
router.post("/dashboard/home/be-member/edit", (req, res) => {

    let name = req.body.name
    let bodyNews = req.body.bodyNews
    let titleImage = req.body.titleImage

    BeMember.create({
        name: name,
        desc: bodyNews,
        img: titleImage
    }).then((user) => {
        res.redirect("/dashboard/home/be-member/edit?success=true")
    }).catch((error) => {
        res.send(error)
    })
})



module.exports = router