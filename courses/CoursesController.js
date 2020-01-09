const express = require("express")
const router = express.Router()
const Courses = require("./Courses")
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


//MOSTRAR CURSO ESPECIFICO
router.get("/course/:title/:id", (req, res) => {
    let id = req.params.id
    if (isNaN(id)) {
        res.redirect("./homepage/courses")
    }
    Courses.findByPk(id).then(courses => {
        if (courses != undefined) {
            res.render("./homepage/courseSpecific", { courses: courses })
        } else {
            res.redirect("./homepage/courses")
        }
    }).catch(error => {
        res.redirect("./homepage/courses")
    })
})


//MOSTRAR TODOS OS CURSOS CADASTRADOS
router.get("/dashboard/courses", adminAuth, (req, res) => {
    Courses.findAll({
        raw: true, order: [['id', 'DESC']]
    }).then(courses => {
        res.render("dashboard/courses/index", { courses: courses, success: req.query.success, successEdit: req.query.successEdit, admin: req.session.user.administrator })
    })
})


//ROTA PARA PÁGINA DE ADD NOVO CURSO
router.get("/dashboard/courses/new", adminAuth, (req, res) => {
    res.render("./dashboard/courses/new", { admin: req.session.user.administrator})
})


//SALVAR DADOS DO FORMULÁRIO - ADD CURSOS
router.post("/dashboard/courses/save", upload.array('photos', 12), (req, res) => {

    let title = req.body.title
    let descCourse = req.body.descCourse
    let bodyCourse = req.body.bodyCourse
    let imgCourse = req.files[0].originalname
    let featured = req.body.featured
    let imgFeatured = req.files[1].originalname
    let impactDesc = req.body.impactDesc
    let impactImg1 = req.files[2].originalname
    let impactImg2 = req.files[3].originalname
    let impactImg3 = req.files[4].originalname

    Courses.create({
        title: title,
        descCourse: descCourse,
        bodyCourse: bodyCourse,
        imgCourse: imgCourse,
        featured: featured,
        imgFeatured: imgFeatured,
        impactDesc: impactDesc,
        impactImg1: impactImg1,
        impactImg2: impactImg2,
        impactImg3: impactImg3
    }).then(() => {
        res.redirect("/dashboard/courses?success=true")
    }).catch((error) => {
        res.send(error)
    })
})


//DELETAR CURSO
router.post("/dashboard/courses/delete", adminAuth,  (req, res) => {
    let id = req.body.id
    if(id != undefined){
        if(!isNaN(id)){
            Courses.destroy({
                where: {id:id}
            }).then(() => {
                res.redirect("/dashboard/courses")
            })
        }else{ //não é número
            res.redirect("/dashboard/courses")
        }
    }else{ //null
        res.redirect("/dashboard/courses")
    }
})


// ROTA PARA PÁGINA DE EDIÇÃO DE USUÁRIO
router.get("/dashboard/courses/edit/:id", adminAuth, (req, res) => {
    let id = req.params.id
    if (isNaN(id)) {
        res.redirect("./dashboard/courses")
    }
    Courses.findByPk(id).then(courses => {
        if (courses != undefined) {
            res.render("./dashboard/courses/edit", { courses: courses,  admin: req.session.user.administrator })
        } else {
            res.redirect("./dashboard/courses")
        }
    }).catch(error => {
        res.redirect("./dashboard/courses")
    })
})


//SALVAR DADOS DO FORMULÁRIO - UPDATE 
router.post("/dashboard/courses/update", adminAuth, upload.array('photos', 12),  (req, res) => {
    let id = req.body.id
    let title = req.body.title
    let descCourse = req.body.descCourse
    let bodyCourse = req.body.bodyCourse
    let imgCourse = req.files[0].originalname
    let featured = req.body.featured
    let imgFeatured = req.files[1].originalname
    let impactDesc = req.body.impactDesc
    let impactImg1 = req.files[2].originalname
    let impactImg2 = req.files[3].originalname
    let impactImg3 = req.files[4].originalname

    Courses.update({
        title: title,
        descCourse: descCourse,
        bodyCourse: bodyCourse,
        imgCourse: imgCourse,
        featured: featured,
        imgFeatured: imgFeatured,
        impactDesc: impactDesc,
        impactImg1: impactImg1,
        impactImg2: impactImg2,
        impactImg3: impactImg3
    }, {
        where: { id: id }
    }).then(() => {
        res.redirect("/dashboard/courses?successEdit=true")
    })
})

module.exports = router
