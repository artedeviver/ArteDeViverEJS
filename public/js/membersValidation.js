let form = document.querySelector('.form-container')
let btn = document.querySelector('.space-button')
let name = document.getElementsByName('name')
let interest = document.getElementById('interest')
let typeActivity = document.getElementsByName('typeActivity')
let materialDonate = document.getElementsByName('materialDonate')
let valueDonate = document.getElementsByName('valueDonate')
let nameInst =document.getElementsByName('nameInst')
let email = document.getElementsByName('email')
let telephone = document.getElementsByName('telephone')
let reason = document.getElementsByName('reason')


form.addEventListener("blur", function (event) {
    if (event.target.value == '' || event.target.value == 0) {
        event.target.classList.add('error')
        verify()

    } else {
        event.target.classList.remove('error')
        verify()
    }
}, true);

function verify() {
    if (name[0].value != '' && email[0].value != '' && telephone[0].value != '' && reason[0].value != '') {
        if (interest.value == 1 && typeActivity[0].value != '' || interest.value == 2 && materialDonate[0].value != '' ||
        interest.value == 3 && valueDonate[0].value != 0 || interest.value == 4 && nameInst[0].value != '' ) {

            btn.disabled = false
            btn.classList.remove("btn-disabled")

        }
    }
}
