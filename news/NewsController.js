const express = require("express")
const router = express.Router()
const News = require("./News")


router.post("/dashboard/news/save", (req, res) => {

    let title = req.body.title
    let body = req.body.body
    let image = req.body.image

    News.create({
        title: title,
        body: body,
        image: image
    }).then(() => {
        res.redirect("/dashboard/news")
    }).catch((error) => {
        res.send(error)
    })
})

module.exports = router