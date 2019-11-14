const express = require("express")
const router = express.Router()
const User = require("./User")


//MOSTRAR TODOS OS USUÁRIOS CADASTRADOS
router.get("/dashboard/users", (req, res) => {
    User.findAll().then(user => {
        res.render("dashboard/user/index", { user: user })
    })
})



//ROTA PARA PÁGINA DE ADD NOVO USUÁRIO
router.get("/dashboard/users/new", (req, res) => {
    res.render("./dashboard/user/new")
})



//SALVAR DADOS DO FORMULÁRIO - ADD USER
router.post("/dashboard/users/save", (req, res) => {

    let name = req.body.name
    let responsibility = req.body.responsibility
    let email = req.body.email
    let password = req.body.password
    let administrator = req.body.administrator


    if (administrator == undefined) {
        administrator = false
    }

    User.create({
        name: name,
        responsibility: responsibility,
        email: email,
        password: password,
        administrator: administrator
    }).then(() => {
        res.redirect("/dashboard/users")
    }).catch((error) => {
        res.send(error)
    })
})



// ROTA PARA PÁGINA DE EDIÇÃO DE USUÁRIO
router.get("/dashboard/users/edit/:id", (req, res) => {
    let id = req.params.id

    if (isNaN(id)) {
        res.redirect("./dashboard/user")
    }

    User.findByPk(id).then(user => {
        if (user != undefined) {
            res.render("./dashboard/user/edit", { user: user })
        } else {
            res.redirect("./dashboard/user")
        }
    }).catch(error => {
        res.redirect("./dashboard/user")
    })
})



//SALVAR DADOS DO FORMULÁRIO - UPDATE 
// router.post("/dashboard/users/update", (req, res) => {
//     let id = req.params.id
//     let name = req.body.name
//     let responsibility = req.body.responsibility
//     let email = req.body.email
//     let password = req.body.password
//     let administrator = req.body.administrator

//     User.update({
//         name: name,
//         responsibility: responsibility,
//         email: email,
//         password: password,
//         administrator: administrator
//     }, {
//         where: { id: id }
//     }).then(() => {
//         res.redirect("/dashboard/user")
//     })
// })







module.exports = router