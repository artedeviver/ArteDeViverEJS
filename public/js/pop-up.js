let body = document.querySelector('.body')

let popUp = document.querySelector(".pop-up")

let btnConcluir = document.querySelector(".action-cadastro-news-letter")
btnConcluir.addEventListener('click', concluir)

let btnVoltar= document.querySelector(".btn-back")
btnVoltar.addEventListener('click', voltar)

function concluir(){
    body.classList.add("overflow-hidden")
    popUp.style.display = "flex"

}

function voltar(){
    window.location.replace("index.html")
}