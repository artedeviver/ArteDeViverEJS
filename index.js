const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const connection = require("./database/database")
const User = require("./user/User")
const userController = require("./user/UserController")


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


//rota padrão
app.get("/", (req, res) => {
    res.render("index")
})

app.get("/cursos", (req, res) => {
    res.render("homepage/cursos")
})

app.get("/news", (req, res) => {
    res.render("homepage/newsGeneral")
})

app.get("/news-specific", (req, res) => {
    res.render("homepage/news")
})

app.get("/quem-somos", (req, res) => {
    res.render("homepage/quemSomos")
})

app.get("/seja-membro", (req, res) => {
    res.render("homepage/sejaMembro")
})





//rotas auxiliares
// app.use("/", userController)
app.get("/login", (req,res) =>{
    res.render("dashboard/login")
})

app.get("/dashboard", (req, res) => {
    res.render("./dashboard/index")
})

app.get("/dashboard-noticias", (req,res) => {
    res.render("./dashboard/news/index")
})

// server
app.listen(4000, () => {
    console.log("Servidor rodando")
})
