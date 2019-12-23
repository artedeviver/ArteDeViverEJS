const express = require("express")
const router = express.Router()
const Partners = require("./Partners")

router.get("/dashboard/home/partners/edit", (req, res) => {

    let id = req.params.id

    Partners.findByPk(1).then(partners => {
        
            res.render("dashboard/home/partners/edit", { partners: partners })

    }).catch(error => {
        res.redirect("./dashboard/home")
    })
})

//SALVAR EDIÇÃO DOS CAMPOS
router.post("/dashboard/home/partners/update", adminAuth, (req, res) => {
    let id = req.params.id
    let img1 = req.body.img1
    let img2 = req.body.img2
    let img3 = req.body.img3
    let img4 = req.body.img4
    let img5 = req.body.img5
    let img6 = req.body.img6

    Partners.update({
        id: id,
        img1: img1,
        img2: img2,
        img3: img3,
        img4: img4,
        img5: img5,
        img6: img6

    }, {
        where: { id: 1 }
    }).then(() => {
        res.redirect("/dashboard/home?successEdit=true")
    })
})

module.exports = router