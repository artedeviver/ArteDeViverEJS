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
router.post("/dashboard/members/save", adminAuth,  (req, res) => {

    let name = req.body.name
    let interest
    let comboInterest = req.body.interest
    let typeActivity = req.body.typeActivity
    let yesEscolas = req.body.yesEscolas
    let prison = req.body.prison
    let pm = req.body.pm
    let materialDonate = req.body.materialDonate
    let valueDonate = req.body.valueDonate
    let nameInst = req.body.nameInst
    let email = req.body.email
    let telephone = req.body.telephone
    let reason = req.body.reason

    if (comboInterest == 1) {
        interest = "Ser voluntário em algum programa"
        if (yesEscolas == 'YesEscolas') {
            yesEscolas = 'Sim'
        } if (prison == 'prison') {
            prison = 'Sim'
        } if (pm == 'pm') {
            pm = 'Sim'
        }
    }

    if (comboInterest == 2){
        interest = "Ser um parceiro através de doações de materiais"
    } 

    if (comboInterest == 3){
        interest = "Ser um parceiro através de doação financeira"
    }

    if (comboInterest == 4 ){
        interest = "Levar a Arte de viver para a minha instituição"
    }

    Members.create({
        name: name,
        interest: interest,
        typeActivity: typeActivity,
        yesEscolas: yesEscolas,
        prison: prison,
        pm: pm,
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
router.post("/dashboard/members/delete", adminAuth,  (req, res) => {
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