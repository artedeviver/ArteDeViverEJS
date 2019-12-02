let combo = document.querySelector(".section-text")
combo.addEventListener("click", verification)

let legal = document.querySelector(".legal")

let natural = document.querySelector(".natural")

let ageForm = document.querySelector("#age")

function verification() {
    if (combo.value == 0) {
        natural.style.display = 'none'
        legal.style.display = 'none'
    }else if (combo.value == 1) {
        natural.style.display = 'block'
        legal.style.display = 'none'    
    } else {
        natural.style.display = 'none'
        legal.style.display = 'block'
        ageForm.value = 0
    }
}
