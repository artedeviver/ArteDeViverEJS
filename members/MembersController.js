const express = require("express")
const router = express.Router()
const Members = require("./Members")
const adminAuth = require('../middlewares/adminAuth')


//MOSTRAR TODOS OS USUÁRIOS CADASTRADOS
router.get("/dashboard/members", adminAuth, (req, res) => {
    Members.findAll({
        raw: true
    }).then(members => {
        res.render("dashboard/members/index", { members: members, success: req.query.success })
    })
})

// SALVAR OS DADOS DO FORMULÁRIO
router.post("/dashboard/members/save", (req, res) => {

    let name = req.body.name
    let interest
    let typeActivityy = req.body.typeActivity
    let projInsp = req.body.projInsp
    let materialDonate = req.body.materialDonate
    let valueDonate = req.body.valueDonate
    let nameInst = req.body.nameInst
    let email = req.body.email
    let telephone = req.body.telephone
    let reason = req.body.reason

    if (checkForm.value == 'YesEscolas') {
        interest = 'Yes nas escolas'
    } else if (checkForm.value == 'prison') {
        interest = 'Prison Smart'
    } else if (checkForm.value == 'pm') {
        interest = 'Programa da PM'
    } else {
        interest = 'Todos os programas'
    }

    Members.create({
        name: name,
        interest: interest,
        typeActivityy: typeActivityy,
        projInsp: projInsp,
        materialDonate: materialDonate,
        valueDonate: valueDonate,
        nameInst: nameInst,
        email: email,
        telephone: telephone,
        reason: reason
    }).then((members) => {
        res.redirect("/?successRegister=true")
    }).catch((error) => {
        res.send(error)
    })
})


// DELETAR UM MEMBRO
router.post("/dashboard/members/delete", adminAuth, (req, res) => {
    let id = req.body.id

    if (id != undefined) {
        if (!isNaN(id)) {
            Members.destroy({
                where: { id: id }
            }).then(() => {
                res.redirect("/dashboard/members")
            })
        } else { //não é número
            res.redirect("/dashboard/members")
        }
    } else { //null
        res.redirect("/dashboard/members")
    }
})


module.exports = router