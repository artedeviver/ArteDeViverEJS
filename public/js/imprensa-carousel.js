let ir = document.querySelector('.next')
ir.addEventListener('click', proximo)

let prev = document.querySelector('.prev')
prev.addEventListener('click', voltar)


let slide = document.querySelector('.visible')

let totalConteudo = document.querySelectorAll('.card').length

let contadorHistoria = 1;

let margin

let paginacaoOne = document.querySelector('.first')

let paginacaoTwo = document.querySelector('.second')

let paginacaoThree = document.querySelector('.third')

function proximo() {
    if (contadorHistoria < totalConteudo) {
        margin = contadorHistoria * -850
        slide.style.marginLeft = `${margin}px`
        contadorHistoria++
        console.log('next' + contadorHistoria)
     

        if (contadorHistoria == 2) {
            console.log('cheguei')
            paginacaoTwo.classList.add("active-newspaper")
            paginacaoOne.classList.remove("active-newspaper")
            paginacaoThree.classList.remove("active-newspaper")
            
        }

        if (contadorHistoria == 3) {
            paginacaoThree.classList.add('active-newspaper')
            paginacaoOne.classList.remove("active-newspaper")
            paginacaoTwo.classList.remove("active-newspaper")
        }

    }
}

function voltar() {
    if (contadorHistoria > 1) {
        margin = margin + 850
        slide.style.marginLeft = `${margin}px`
        contadorHistoria--
        console.log('back' + contadorHistoria)

        if (contadorHistoria == 1){
            paginacaoOne.classList.add("active-newspaper")
            paginacaoTwo.classList.remove("active-newspaper")

        }

        if (contadorHistoria == 2) {
            paginacaoTwo.classList.add("active-newspaper")
            paginacaoOne.classList.remove("active-newspaper")
            paginacaoThree.classList.remove("active-newspaper")
        }

        if (contadorHistoria == 3) {
            paginacaoThree.classList.add('active-newspaper')
            paginacaoOne.classList.remove("active-newspaper")
            paginacaoTwo.classList.remove("active-newspaper")
        }
    }
}

