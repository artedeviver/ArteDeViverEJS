let ir = document.querySelector('.next')
ir.addEventListener('click', proximo)

let prev = document.querySelector('.prev')
prev.addEventListener('click', voltar)

let slide = document.querySelector('.slide')

let totalConteudo = document.querySelectorAll('.information-container').length

let contadorHistoria = 1;

let margin

let paginacaoOne = document.querySelector('.one')

let paginacaoTwo = document.querySelector('.two')

let paginacaoThree = document.querySelector('.three')

function proximo() {
    if (contadorHistoria < totalConteudo) {
        margin = contadorHistoria * -1000
        slide.style.marginLeft = `${margin}px`
        contadorHistoria++

        if (contadorHistoria == 2) {
            paginacaoTwo.classList.add("active-pagination")
            paginacaoOne.classList.remove("active-pagination")
            paginacaoThree.classList.remove("active-pagination")
        }

        if (contadorHistoria == 3) {
            paginacaoThree.classList.add('active-pagination')
            paginacaoOne.classList.remove("active-pagination")
            paginacaoTwo.classList.remove("active-pagination")
        }

    }
}

function voltar() {
    if (contadorHistoria > 1) {
        margin = margin + 1000
        slide.style.marginLeft = `${margin}px`
        contadorHistoria--

        if (contadorHistoria == 1){
            paginacaoOne.classList.add("active-pagination")
            paginacaoTwo.classList.remove("active-pagination")

        }

        if (contadorHistoria == 2) {
            paginacaoTwo.classList.add("active-pagination")
            paginacaoOne.classList.remove("active-pagination")
            paginacaoThree.classList.remove("active-pagination")
        }

        if (contadorHistoria == 3) {
            paginacaoThree.classList.add('active-pagination')
            paginacaoOne.classList.remove("active-pagination")
            paginacaoTwo.classList.remove("active-pagination")
        }
    }
}

