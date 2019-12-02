const express = require("express")
const router = express.Router()
const Courses = require("./Courses")

//MOSTRAR CURSO ESPECIFICO
// router.get("/courseName", (req, res) => {
//     res.render("./homepage/courseSpecific")
// })

router.get("/:title/:id", (req, res) => {

    let id = req.params.id
    let name = req.params.title

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
router.get("/dashboard/courses", (req, res) => {
    Courses.findAll({
        raw: true, order: [['id', 'DESC']]
    }).then(courses => {
        res.render("dashboard/courses/index", { courses: courses, success: req.query.success, successEdit: req.query.successEdit })
    })
})

//ROTA PARA PÁGINA DE ADD NOVO CURSO
router.get("/dashboard/courses/new", (req, res) => {
    res.render("./dashboard/courses/new")
})

//SALVAR DADOS DO FORMULÁRIO - ADD CURSOS
router.post("/dashboard/courses/save", (req, res) => {

    let title = req.body.title
    let bodyCourse = req.body.bodyCourse
    let imgCourse = req.body.imgCourse
    let featured = req.body.featured
    let imgFeatured = req.body.imgFeatured
    let impactDesc = req.body.impactDesc
    let impactImg1 = req.body.impactImg1
    let impactImg2 = req.body.impactImg2
    let impactImg3 = req.body.impactImg3

    Courses.create({
        title: title,
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
router.post("/dashboard/courses/delete", (req, res) => {
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
router.get("/dashboard/courses/edit/:id", (req, res) => {
    let id = req.params.id

    if (isNaN(id)) {
        res.redirect("./dashboard/courses")
    }

    Courses.findByPk(id).then(courses => {
        if (courses != undefined) {
            res.render("./dashboard/courses/edit", { courses: courses })
        } else {
            res.redirect("./dashboard/courses")
        }
    }).catch(error => {
        res.redirect("./dashboard/courses")
    })
})

//SALVAR DADOS DO FORMULÁRIO - UPDATE 
router.post("/dashboard/courses/update", (req, res) => {
    let id = req.body.id
    let title = req.body.title
    let bodyCourse = req.body.bodyCourse
    let imgCourse = req.body.imgCourse
    let featured = req.body.featured
    let imgFeatured = req.body.imgFeatured
    let impactDesc = req.body.impactDesc
    let impactImg1 = req.body.impactImg1
    let impactImg2 = req.body.impactImg2
    let impactImg3 = req.body.impactImg3

    Courses.update({
        title: title,
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