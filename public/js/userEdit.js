let form = document.querySelector('.form-container')
let btn = document.querySelector('.btn-verification')
let name = document.getElementsByName('name')
let responsibility = document.getElementsByName('responsibility')
let email = document.getElementsByName('email')
let password = document.getElementsByName('password')

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
    if (name[0].value != '' && responsibility[0].value != '' && email[0].value != '' && password[0].value != '') {
        btn.disabled = false
        btn.classList.remove("btn-disabled")
        btn.classList.add("primary")
    }
}