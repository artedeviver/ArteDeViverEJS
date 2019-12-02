let popUp3 = document.querySelector('.delete')
let elementId = document.querySelector('.id')
let element = document.querySelector('.idCard')
 
function show(){
    elementId.value = element.value
    popUp3.style.display = 'block'
}