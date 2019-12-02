let bodyAll = document.querySelector('.body')
let popup = document.querySelector('.pop-up')
let sucess = document.querySelector('.success').innerText
let btnBack = document.querySelector('.btn-back')
btnBack.addEventListener('click', close)

if(sucess == 'true'){
    bodyAll.classList.add("hidden")
    popup.style.display = "flex"
}

function close() {
    bodyAll.classList.remove("hidden")
}