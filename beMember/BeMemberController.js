const express = require("express")
const router = express.Router()
const BeMember = require("./BeMember")

router.get("/dashboard/home/beMember/edit", (req, res) => {

    let id = req.params.id

    const showMember = BeMember.findAll({
        raw: true, limit: 5, order: [['id', 'DESC']]
    })
    res.render("./dashboard/home/beMember/edit", {showMember})
})

//SALVAR EDIÇÃO DOS CAMPOS
router.post("/dashboard/home/beMember/update", (req, res) => {
    let id = req.params.id
    let name = req.body.name
    let desc = req.body.desc
    let img = req.body.img

    BeMember.update({
        id: id,
        name: name,
        img: img,
    }, {
        where: { id: 1 }
    }).then(() => {
        res.redirect("/dashboard/home?successEdit=true")
    })
})


module.exports = router