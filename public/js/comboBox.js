let combo = document.querySelector(".section-text")
combo.addEventListener("click", verification)

let voluntaryProgram = document.querySelector(".voluntary-program")

let donateMaterial = document.querySelector(".donate-materials")

let donateMoney = document.querySelector(".donate-money")

let legal = document.querySelector(".legal")

function verification() {

    if (combo.value == 1) {
        voluntaryProgram.style.display = 'block'
        donateMaterial.style.display = 'none'
        donateMoney.style.display = 'none'
        legal.style.display = 'none'
    } else if (combo.value == 2) {
        voluntaryProgram.style.display = 'none'
        donateMaterial.style.display = 'block'
        donateMoney.style.display = 'none'
        legal.style.display = 'none'
    } else if (combo.value == 3) {
        donateMoney.style.display = 'block'
        voluntaryProgram.style.display = 'none'
        donateMaterial.style.display = 'none'
        legal.style.display = 'none'
    } else if (combo.value == 4) {
        donateMoney.style.display = 'none'
        voluntaryProgram.style.display = 'none'
        donateMaterial.style.display = 'none'
        legal.style.display = 'block'
    }
}