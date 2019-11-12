const container = document.querySelector('.search-container')
container.addEventListener('mouseenter', expand)
container.addEventListener('mouseleave', retract)
const navContainer = document.querySelector('.navigation-container')
const input = document.querySelector('.input-search')


function expand() {
    navContainer.style.width = "950px"
    container.style.width = "350px"
    input.style.display = "block"
}

function retract() {
    if (input.value == '') {
        container.style.width = "30px"
        input.style.display = "none"
    }
}
