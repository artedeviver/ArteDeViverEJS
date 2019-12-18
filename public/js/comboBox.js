let combo = document.querySelector(".section-text")
combo.addEventListener("click", verification)

let voluntaryProgram = document.querySelector(".voluntary-program")

let donateMaterial = document.querySelector(".donate-materials")

let donateMoney = document.querySelector(".donate-money")

let selectTodos = document.querySelector(".todos")
selectTodos.addEventListener("click", select)

let counter = 0

function select() {
    counter++
    if (counter % 2 === 1) {
        document.querySelector(".yesEscolas").setAttribute('checked', true)
        document.querySelector(".yesEscolas").setAttribute('disabled', true)

        document.querySelector(".pm").setAttribute('checked', true)
        document.querySelector(".pm").setAttribute('disabled', true)

        document.querySelector(".prison").setAttribute('checked', true)
        document.querySelector(".prison").setAttribute('disabled', true)
    } else {
        document.querySelector(".yesEscolas").removeAttribute('checked', true)
        document.querySelector(".yesEscolas").removeAttribute('disabled', true)

        document.querySelector(".pm").removeAttribute('checked', true)
        document.querySelector(".pm").removeAttribute('disabled', true)

        document.querySelector(".prison").removeAttribute('checked', true)
        document.querySelector(".prison").removeAttribute('disabled', true)
    }
}

function verification() {
    if (combo.value == 1) {
        voluntaryProgram.style.display = 'block'
        donateMaterial.style.display = 'none'
        donateMoney.style.display = 'none'
    } else if (combo.value == 2) {
        voluntaryProgram.style.display = 'none'
        donateMaterial.style.display = 'block'
        donateMoney.style.display = 'none'
    } else if (combo.value == 3) {
        donateMoney.style.display = 'block'
        voluntaryProgram.style.display = 'none'
        donateMaterial.style.display = 'none'
    }
}

