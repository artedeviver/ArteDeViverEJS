const navMobile = document.querySelector(".nav-mobile")
navMobile.addEventListener('click', dropdownMenu)
const itemNavbar = document.querySelector(".item-navbar")

const program = document.querySelector(".program")
program.addEventListener('click', subMenu)

const dropdown = document.querySelector(".dropdown")

let count = 0
let count2 = 0

function dropdownMenu() {


    if (count % 2 === 0) {
        count++
        itemNavbar.style.display = 'flex'
        navMobile.classList.add("active-menu")
    } else {
        count++
        itemNavbar.style.display = 'none'
        navMobile.classList.remove("active-menu")
    }
}

function subMenu() {
    if (count2 % 2 === 0) {
        count2++
        dropdown.style.display = 'block'
    } else {
        count2++
        dropdown.style.display = 'none'
    }
}