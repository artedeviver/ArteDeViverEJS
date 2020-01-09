const express = require("express")
const router = express.Router()
const BeMember = require("./BeMember")
const multer = require('multer')
const adminAuth = require('../middlewares/adminAuth')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})
const upload = multer({ storage })

router.get("/dashboard/home/be-member/edit", adminAuth, (req, res) => {
    BeMember.findAll({
        raw: true, order: [['id', 'DESC']]
    }).then(member => {
        res.render("./dashboard/home/beMember/edit", { member: member, success: req.query.success, admin: req.session.user.administrator})
    })
})


//SALVAR EDIÇÃO DOS CAMPOS
router.post("/dashboard/home/be-member/update", adminAuth,  upload.single('titleImage'), (req, res) => {
    let id = req.body.id
    let name = req.body.name
    let bodyNews = req.body.bodyNews
    let titleImage = req.file.originalname

    BeMember.update({
        name: name,
        desc: bodyNews,
        img: titleImage
    }, {
        where: { id: id }
    }).then(() => {
        res.redirect("/dashboard/home?successEdit=true")
    })
})


module.exports = router