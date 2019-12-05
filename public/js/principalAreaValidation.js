let form = document.querySelector('.form-container')
let btn = document.querySelector('.btn-change')
let title = document.getElementsByName('title')
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

function verify() {
    if (title[0].value != '' && img.src != '') {
        btn.disabled = false
        btn.classList.remove("btn-disabled")
        btn.classList.add("primary")
    }
}