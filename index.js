const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const connection = require("./database/database")
const session = require('express-session')
const bcrypt = require('bcryptjs')

const Homepage = require("./homepage/Homepage")
const HomepageController = require("./homepage/HomepageController")

const User = require("./user/User")
const userController = require("./user/UserController")

const News = require("./news/News")
const NewsController = require("./news/NewsController")

const Courses = require("./courses/Courses")
const CoursesController = require("./courses/CoursesController")

const Members = require("./members/Members")
const MembersController = require("./members/MembersController")

const PrincipalArea = require("./principalArea/PrincipalArea")
const PrincipalAreaController = require("./principalArea/PrincipalAreaController")

const Partners = require("./partners/Partners")
const PartnersController = require("./partners/PartnersController")


// ejs
app.set('view engine', 'ejs')

//sessions
app.use(session({
    secret: "uhsuahsuashaushausuasuashushau", //pode ser qualquer texto, quanto mais aleatório, melhor
    cookie: { maxAge: 1800000 }
}))

//arquivos staticos - css, javascrip, img
app.use(express.static('public'))

// body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// database connection
connection
    .authenticate()
    .then(() => {
        console.log('Conexão estabelecida com sucesso')
    })
    .catch((error) => {
        console.log(error)
    })

app.use("/", userController)

app.use("/", NewsController)

app.use("/", CoursesController)

app.use("/", HomepageController)

app.use("/", MembersController)

app.use("/", PrincipalAreaController)

app.use("/", PartnersController)



//rota padrão
app.get("/", (req, res) => {
    res.render("index")
})



// rotas de login
app.get("/login", (req, res) => {
    res.render("dashboard/login")
})

// validação de usuário
app.post("/authenticate", (req, res) => {
    let email = req.body.email
    let password = req.body.password

    User.findOne({ where: { email: email } }).then(user => {
        if (user != undefined) {
            let correct = bcrypt.compareSync(password, user.password)

            if (correct) {
                req.session.user = {
                    id: user.id,
                    email: user.email
                }
                res.redirect("/dashboard")
            } else {
                res.redirect("/login")
            }
        } else {
            res.redirect("/login")
        }
    })
})

//logout
app.get("/logout", (re1, res) => {
    req.session.user = undefined
    req.redirect("/")
})



//rotas auxiliares
app.get("/dashboard", (req, res) => {
    res.render("./dashboard/index")
})

app.get("/dashboard/home", (req, res) => {
    res.render("./dashboard/home/index", { successEdit: req.query.successEdit })
})


// server
app.listen(4000, () => {
    console.log("Servidor rodando")
})
