const express = require("express")
const router = express.Router()
const Partners = require("./Partners")
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

router.get("/dashboard/home/partners/edit", adminAuth,  (req, res) => {

    let id = req.params.id

    Partners.findByPk(1).then(partners => {
        
            res.render("dashboard/home/partners/edit", { partners: partners , admin: req.session.user.administrator})

    }).catch(error => {
        res.redirect("./dashboard/home")
    })
})

//SALVAR EDIÇÃO DOS CAMPOS
router.post("/dashboard/home/partners/update", adminAuth, upload.array('photos', 12), (req, res) => {
    let id = req.params.id
    let img1 = req.files[0].originalname
    let img2 = req.files[1].originalname
    let img3 = req.files[2].originalname
    let img4 = req.files[3].originalname
    let img5 = req.files[4].originalname
    let img6 = req.files[5].originalname

    Partners.update({
        id: id,
        img1: img1,
        img2: img2,
        img3: img3,
        img4: img4,
        img5: img5,
        img6: img6

    }, {
        where: { id: 1 }
    }).then(() => {
        res.redirect("/dashboard/home?successEdit=true")
    })
})

module.exports = router