let body = document.querySelector('.body')

let popUp = document.querySelector(".pop-up")

let btnCadastro = document.querySelector(".action-cadastro")
btnCadastro.addEventListener('click', concluirCadastro)

let btnVoltar = document.querySelector(".btn-back-cadastro")
btnVoltar.addEventListener('click', voltar)

let combo = document.querySelector(".section-text")
combo.addEventListener("click", verification)

let legal = document.querySelector(".legal")

let natural = document.querySelector(".natural")

function concluirCadastro() {
    body.classList.add("overflow-hidden")
    popUp.style.display = "flex"

}

function voltar() {
    window.location.replace("../index.html")
}

function verification() {
    if (combo.value == 0) {
        natural.style.display = 'none'
        legal.style.display = 'none'
    }
    else if (combo.value == 1) {
        natural.style.display = 'block'
        legal.style.display = 'none'
        console.log(combo.value)
    } else {
        natural.style.display = 'none'
        legal.style.display = 'block'
        console.log(combo.value)
    }
}


