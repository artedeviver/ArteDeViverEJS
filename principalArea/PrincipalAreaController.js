const express = require("express")
const router = express.Router()
const PrincipalArea = require("./PrincipalArea")
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
  
router.get("/dashboard/home/principalArea/edit", adminAuth, (req, res) => {
    let id = req.params.id

    PrincipalArea.findByPk(1).then(principalarea => {
        
            res.render("./dashboard/home/principalArea/edit", { principalarea: principalarea,  admin: req.session.user.administrator })

    }).catch(error => {
        res.redirect("./dashboard/home")
    })
})

//SALVAR EDIÇÃO DOS CAMPOS
router.post("/dashboard/home/principalArea/update", adminAuth, upload.single('imgBackground'), (req, res) => {
    let id = req.params.id
    let title = req.body.title
    let imgBackground = req.file.originalname

    PrincipalArea.update({
        id: id,
        title: title,
        imgBackground: imgBackground,
    }, {
        where: { id: 1 }
    }).then(() => {
        res.redirect("/dashboard/home?successEdit=true")
    })
})

module.exports = router