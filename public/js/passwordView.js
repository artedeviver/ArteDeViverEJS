document.querySelector(".btn-password-view").addEventListener('mousedown', function () {
    document.querySelector(".input-password").type = 'text'
    document.querySelector(".img-password").setAttribute("src", "/img/dashboard/view.png")
})

document.querySelector(".btn-password-view").addEventListener('mouseup', function () {
    document.querySelector(".input-password").type = 'password'
    document.querySelector(".img-password").setAttribute("src", "/img/dashboard/hide.png")
})