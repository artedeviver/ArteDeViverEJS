let combo = document.querySelector(".section-text")
combo.addEventListener("click", verification)

let voluntaryProgram = document.querySelector(".checkbox-form")

let donateMaterial = document.querySelector(".donate-materials")

let donateMoney = document.querySelector(".donate-money")

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
        voluntaryProgram.style.display = 'none'
        donateMaterial.style.display = 'none'
        donateMoney.style.style = 'block'
    }
}
