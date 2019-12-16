
let body = document.querySelector('.body')
let popUp = document.querySelector('.pop-up')
let name = document.getElementsByName('name')
let email = document.getElementsByName('email')
let success = document.querySelector('.success').innerText
let btnews = document.querySelector('.btn-news')
let form = document.querySelector('.form')
btnews.addEventListener('click', close)

form.addEventListener("blur", function (event) {
    verify()
}, true);

function verify() {
    if (name[0].value != '' && email[0].value != '') {
        btnews.disabled = false
    }
}

if (success == 'true') {
    body.classList.add("hidden")
    popUp.style.display = "flex"
}
