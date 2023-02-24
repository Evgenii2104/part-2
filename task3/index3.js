let minus = Array.from(document.querySelectorAll('.product__quantity-control_dec'))
let plus = Array.from(document.querySelectorAll('.product__quantity-control_inc'))
let values = Array.from(document.querySelectorAll('.product__quantity-value'))
let buttAdds = Array.from(document.querySelectorAll('.product__add'))
let images = Array.from(document.querySelectorAll('.product__image'))

console.log(images)

minus.forEach((minu, index) => {
    minu.onclick = () => {
        if (values[index].innerText > 1) {
            values[index].innerText = values[index].innerText - 1
        } 
    }
})

plus.forEach((plu, index) => {
    plu.onclick = () => {
        values[index].innerText++
    }
})

