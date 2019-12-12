let form = document.querySelector('.form-container')
let btn = document.querySelector('.btn-change')
let title = document.getElementsByName('title')
let bodyNews = document.querySelector('.mce-content-body')
let titleImage = document.getElementsByName('titleImage')
let img = document.querySelector('.img-selected')


form.addEventListener("blur", function (event) {
    console.log('ooooooooooooooooooooooooooooooooooooooooooooooooo')
    // if (event.target.value == '') {
    //     event.target.classList.add('error')
    //     console.log('EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE')
    //     // verify()
    // } else {
    //     event.target.classList.remove('error')
    //     console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
    //     // verify()
    // }
}, true);

// function verify() {
//     if (title[0].value != '' && bodyNews.innerText != '' && titleImage[0].value != '') {
//         // btn.disabled = false
//         // btn.classList.remove("btn-disabled")
//         // btn.classList.add("primary")
//         console.log('aahaihauhusahsaishusshiahhshsauihsu')
//     }
// }