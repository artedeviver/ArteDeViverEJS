const navMobile = document.querySelector(".nav-mobile").addEventListener('click', dropdownMenu)
const itemNavbar = document.querySelector(".item-navbar")

function dropdownMenu() {
    itemNavbar.style.display = 'flex'
}