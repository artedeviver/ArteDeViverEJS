let form = document.querySelector('.form-container')
let btn = document.querySelector('.btn-change')

let title = document.getElementsByName('title')
let bodyCourse = document.getElementsByName('bodyCourse')
let descCourse = document.getElementsByName('descCourse')
let imgCourse = document.getElementsByName('imgCourse')
let featured = document.getElementsByName('featured')
let imgFeatured = document.getElementsByName('imgFeatured')
let impactDesc = document.getElementsByName('impactDesc')
let impactImg1 = document.getElementsByName('impactImg1')
let impactImg2 = document.getElementsByName('impactImg2')
let impactImg3 = document.getElementsByName('impactImg3')


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
if (title[0].value != '' && text != '' && descCourse[0].value != '' && imgCourse[0].value != '' && featured[0].value != ''
&& imgFeatured[0].value != ''  && impactDesc[0].value != ''  && impactImg1[0].value != ''  && impactImg2[0].value != '' &&
impactImg3[0].value != '') {
    btn.disabled = false
    btn.classList.remove("btn-disabled")
    btn.classList.add("primary")
}
}