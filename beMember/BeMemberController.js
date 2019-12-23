const express = require("express")
const router = express.Router()
const BeMember = require("./BeMember")


router.get("/dashboard/home/be-member/edit", adminAuth, (req, res) => {
    BeMember.findAll({
        raw: true, order: [['id', 'DESC']]
    }).then(member => {
        res.render("./dashboard/home/beMember/edit", { member: member, success: req.query.success})
    })
})


//SALVAR EDIÇÃO DOS CAMPOS
router.post("/dashboard/home/be-member/update", adminAuth, (req, res) => {
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
        res.redirect("/dashboard/home?successEdit=true")
    })
})


module.exports = router