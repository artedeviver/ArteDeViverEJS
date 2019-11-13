let bodyCadastro = document.querySelector('.body')

let popUpCadastro = document.querySelector(".pop-up")

let btnCadastro = document.querySelector(".action-cadastro")
btnCadastro.addEventListener('click', concluirCadastro)

let btnVoltarCadastro = document.querySelector(".btn-back-cadastro")
btnVoltarCadastro.addEventListener('click', voltar)

let combo = document.querySelector(".section-text")
combo.addEventListener("click", verification)

let legal = document.querySelector(".legal")

let natural = document.querySelector(".natural")

function concluirCadastro() {
    bodyCadastro.classList.add("overflow-hidden")
    popUpCadastro.style.display = "flex"

}

function voltar() {
    window.location.replace("/")
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


