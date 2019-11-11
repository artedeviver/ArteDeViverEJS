const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const connection = require("./database/database")


// ejs
app.set('view engine', 'ejs')


//arquivos staticos - css, javascrip, img
app.use(express.static('public')) 


// body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


// database connection
connection 
    .authenticate()
        .then(() =>{
            console.log('Conexão estabelecida com sucesso')
        })
        .catch((error) =>{
            console.log(error)
        })


//rota padrão
app.get("/", (req, res) => {
    res.render("index")
})


app.listen(4000, () => {
    console.log("Servidor rodando")
})
