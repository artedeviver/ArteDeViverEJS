const express = require("express")
const router = express.Router()
const User = require("./User")


//MOSTRAR TODOS OS USUÁRIOS CADASTRADOS
router.get("/dashboard/users", (req, res) => {
    User.findAll({
        raw: true, order: [['id', 'DESC']]
    }).then(user => {
        res.render("dashboard/user/index", { user: user, success: req.query.success })
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

    if (name != undefined && responsibility != undefined && email != undefined && password != undefined && administrator != undefined) {
        User.create({
            name: name,
            responsibility: responsibility,
            email: email,
            password: password,
            administrator: administrator
        }).then((user) => {
            res.redirect("/dashboard/users?success=true")
        }).catch((error) => {
            res.send(error)
        })
    }
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
router.post("/dashboard/users/update", (req, res) => {
    let id = req.body.id
    let name = req.body.name
    let responsibility = req.body.responsibility
    let email = req.body.email
    let password = req.body.password
    let administrator = req.body.administrator

    User.update({
        name: name,
        responsibility: responsibility,
        email: email,
        password: password,
        administrator: administrator
    }, {
        where: { id: id }
    }).then(() => {
        res.redirect("/dashboard/users")
    })
})


//DELETAR USUÁRIO
router.post("/dashboard/users/delete", (req, res) => {
    let id = req.body.id

    if (id != undefined) {
        if (!isNaN(id)) {
            User.destroy({
                where: { id: id }
            }).then(() => {
                res.redirect("/dashboard/users")
            })
        } else { //não é número
            res.redirect("/dashboard/users")
        }
    } else { //null
        res.redirect("/dashboard/users")
    }
})


// LOGIN
router.post("/login", (req, res) => {
    let email = req.body.email
    let password = req.body.password


    User.findOne({
        where: { email: email, password: password }
    }).then(user => {

        if (user && password == user.get('password') && email == user.get('email')) {
            res.render("./dashboard/index")
        } else {
            res.send(console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"))
        }
    })
})




module.exports = router