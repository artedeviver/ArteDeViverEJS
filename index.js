const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const connection = require("./database/database")

const Homepage = require("./homepage/Homepage")
const HomepageController = require("./homepage/HomepageController")

const User = require("./user/User")
const userController = require("./user/UserController")

const News = require("./news/News")
const NewsController = require("./news/NewsController")

const Courses = require("./courses/Courses")
const CoursesController = require("./courses/CoursesController")

const PrincipalArea = require("./principalArea/PrincipalArea")
const PrincipalAreaController = require("./principalArea/PrincipalAreaController")

const Partners = require("./partners/Partners")
const PartnersController = require("./partners/PartnersController")

// ejs
app.set('view engine', 'ejs')

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

app.use("/", PrincipalAreaController)

app.use("/", PartnersController)

//rota padrão
app.get("/", (req, res) => {
    res.render("index")
})

//rotas auxiliares
// app.use("/", userController)
app.get("/login", (req,res) =>{
    res.render("dashboard/login")
})

app.get("/dashboard", (req, res) => {
    res.render("./dashboard/index")
})

app.get("/dashboard/home", (req,res) => {
    res.render("./dashboard/home/index", {successEdit: req.query.successEdit})
})

// server
app.listen(4000, () => {
    console.log("Servidor rodando")
})
