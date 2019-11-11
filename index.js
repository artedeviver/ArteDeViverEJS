const express = require("express")
const app = express()
const bodyParser = require("body-parser")


// ejs
app.set('view engine', 'ejs')


//arquivos staticos - css, javascrip, img
app.use(express.static('public')) 


// body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


//rota padrão
app.get("/", (req, res) => {
    res.send("Bom dia")
})


app.listen(4000, () => {
    console.log("SERVIDOR RODANDO")
})
