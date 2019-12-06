const express = require("express")
const router = express.Router()
const PrincipalArea = require("./PrincipalArea")
const adminAuth = require('../middlewares/adminAuth')

router.get("/dashboard/home/principalArea/edit", adminAuth, (req, res) => {

    let id = req.params.id

    PrincipalArea.findByPk(1).then(principalarea => {
        
            res.render("./dashboard/home/principalArea/edit", { principalarea: principalarea })

    }).catch(error => {
        res.redirect("./dashboard/home")
    })
})

//SALVAR EDIÇÃO DOS CAMPOS
router.post("/dashboard/home/principalArea/update", adminAuth, (req, res) => {
    let id = req.params.id
    let title = req.body.title
    let imgBackground = req.body.imgBackground

    PrincipalArea.update({
        id: id,
        title: title,
        imgBackground: imgBackground,
    }, {
        where: { id: 1 }
    }).then(() => {
        res.redirect("/dashboard/home?successEdit=true")
    })
})

module.exports = router