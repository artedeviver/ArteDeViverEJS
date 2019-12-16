let form = document.querySelector('.form-container')
let btn = document.querySelector('.btn-change')
let title = document.getElementsByName('title')
let newsDesc = document.getElementsByName('newsDesc')
let titleImage = document.getElementsByName('titleImage')
let img = document.querySelector('.img-selected')


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
    if (title[0].value != '' && newsDesc[0].value != '' && text != '' && titleImage[0].value != '') {
        btn.disabled = false
        btn.classList.add('primary')
        btn.classList.remove("btn-disabled")
    }
}
