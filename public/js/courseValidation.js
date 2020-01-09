let form = document.querySelector('.form-container')
let btn = document.querySelector('.btn-change')

let title = document.getElementsByName('title')
let bodyCourse = document.getElementsByName('bodyCourse')
let descCourse = document.getElementsByName('descCourse')
let imgCourse = document.getElementsByName('photos')[0]
let featured = document.getElementsByName('featured')
let imgFeatured = document.getElementsByName('imgFeatured')
let impactDesc = document.getElementsByName('photos')[1]
let impactImg1 = document.getElementsByName('photos')[2]
let impactImg2 = document.getElementsByName('photos')[3]
let impactImg3 = document.getElementsByName('photos')[4]


form.addEventListener("blur", function (event) {
    if (event.target.value == '') {
        event.target.classList.add('error')
        verify()
    } else {
        event.target.classList.remove('error')
        verify()
    }
}, true);

function verify(text) {
if (title[0].value != '' && text != '' && descCourse[0].value != '' && imgCourse.value != '' && featured[0].value != ''
&& imgFeatured.value != ''  && impactDesc.value != ''  && impactImg1.value != ''  && impactImg2.value != '' &&
impactImg3.value != '') {
    btn.disabled = false
    btn.classList.remove("btn-disabled")
    btn.classList.add("primary")
}
}