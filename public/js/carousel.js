const left = document.querySelector('.btn-carousel-left')
const right = document.querySelector('.btn-carousel-right')
const courseContainer = document.querySelector('.course-container')
const courseCard = document.querySelectorAll('.course').length

left.addEventListener('click', toLeft)
right.addEventListener('click', toRight)

let position = 0
let contador = 1;

function toLeft() {
    if (contador > 1) {
        position += 400
        courseContainer.style.left = `${position}px`
        contador--
    }
}

function toRight() {
    if (contador < courseCard) {
        position -= 400
        courseContainer.style.left = `${position}px`
        contador++
    }
}

