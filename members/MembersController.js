const express = require("express")
const router = express.Router()
const Members = require("./Members")

//MOSTRAR TODOS OS USUÁRIOS CADASTRADOS
router.get("/dashboard/members", (req, res) => {
    Members.findAll({
        raw: true, order: [['id', 'DESC']]
    }).then(members => {
        res.render("dashboard/members/index", { members:members, success: req.query.success})
    })
})


// SALVAR OS DADOS DO FORMULÁRIO
router.post("/dashboard/members/save", (req, res) => {

    let name = req.body.name
    let interest
    let company = req.body.collaborator
    let age = req.body.age
    let email = req.body.email
    let telephone = req.body.telephone
    let reason = req.body.reason

    if(company != " "){
        interest = 'parceiro'
        age = 0
    }else{
        interest = 'voluntário'
    }

    Members.create({
        name: name,
        interest: interest,
        age: age,
        company: company,
        email: email,
        telephone:telephone,
        reason:reason
    }).then((members) => {
    res.redirect("/?success=true")
    }).catch((error) =>{
        res.send(error)
    })
})


// DELETAR UM MEMBRO
router.post("/dashboard/members/delete", (req, res) => {
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