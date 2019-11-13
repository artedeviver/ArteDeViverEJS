let bodyIndex = document.querySelector('.body')

let popUpIndex = document.querySelector(".pop-up")

let btnConcluir = document.querySelector(".action-cadastro-news-letter")
btnConcluir.addEventListener('click', concluir)

let btnVoltar= document.querySelector(".btn-back")
btnVoltar.addEventListener('click', voltar)

function concluir(){
    bodyIndex.classList.add("hidden")
    popUpIndex.style.display = "flex"
}

function voltar(){
    window.location.replace("/")
}