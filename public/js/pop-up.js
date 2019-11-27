let body = document.querySelector('.body')
let popUp = document.querySelector('.pop-up')
let success = document.querySelector('.success').innerText
let btn = document.querySelector('.btn-back')
btn.addEventListener('click', close)

if(success == 'true'){
    body.classList.add("hidden")
    popUp.style.display = "flex"
}

function close() {
    body.classList.remove("hidden")
}