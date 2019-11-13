const express = require("express")
const router = express.Router()
const User = require("./User")


//TODOS OS USUÁRIOS
router.get("/dashboard/users", (req, res) => {
    User.findAll().then(users => {
        res.render("dashboard/user/index")
    })
})



//ROTA PARA ADD NOVO USUÁRIO
router.get("/dashboard/users/new", (req, res) =>{
   res.render("./dashboard/user/new")
})


//new user
// router.get("/new-user", (req, res) => {
//     res.render("new-user")
// })


//user save



module.exports = router