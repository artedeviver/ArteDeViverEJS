const navMobile = document.querySelector(".nav-mobile").addEventListener('click', dropdownMenu)
const itemNavbar = document.querySelector(".item-navbar")

let count = 0

function dropdownMenu() {

    if (count % 2 === 0) {
        count++
        itemNavbar.style.display = 'flex'
    } else {
        count++
        itemNavbar.style.display = 'none'
    }

}