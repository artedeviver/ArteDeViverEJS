const leftMember = document.querySelector('.beamember-button-left')
const rightMember = document.querySelector('.beamember-button-right')
const memberContainer = document.querySelector('.carousel-container')
const memberCard = document.querySelectorAll('.member').length


leftMember.addEventListener('click', toLeft)
rightMember.addEventListener('click', toRight)


let position2 = 0
let contador2 = 1;

function toLeft() {
    if (contador2 > 1) {
        position2 += 900
        memberContainer.style.left = `${position2}px`
        contador2--
    }
}

function toRight() {
    if (contador2 < memberCard) {
        position2 -= 900
        memberContainer.style.left = `${position2}px`
        contador2++
    }
}

