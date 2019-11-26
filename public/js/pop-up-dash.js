let success = document.querySelector('.success').innerText
let successEdit = document.querySelector('.successEdit').innerText
let popUp = document.querySelector('.user')
let popUp2 = document.querySelector('.edit')
let popUp3 = document.querySelector('.delete')
let elementId = document.querySelector('.id')
let element = document.querySelector('.idCard')

if (success == 'true') {
    popUp.style.display = "block"
}

if (successEdit == 'true') {
    popUp2.style.display = "block"
}

function show(){
    elementId.value = element.value
    popUp3.style.display = 'block'
}