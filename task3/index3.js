let minus = Array.from(document.querySelectorAll('.product__quantity-control_dec'))
let plus = Array.from(document.querySelectorAll('.product__quantity-control_inc'))
let values = Array.from(document.querySelectorAll('.product__quantity-value'))
let buttAdds = Array.from(document.querySelectorAll('.product__add'))
let images = Array.from(document.querySelectorAll('.product__image'))

console.log(values[0].innerText)

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



buttAdds.forEach((buttAdd, index) => {
    buttAdd.onclick = () => {

        let div = document.createElement('div')
        div.classList.add('cart__product')
        
        let idi = document.querySelectorAll('.products > .product')[index]
        let id = idi.getAttribute('data-id')
        div.setAttribute('data-id', id)


        document.querySelector('.cart__products').appendChild(div)

        let pic = images[index].cloneNode(true)
        document.querySelector(`[data-id="${id}"]`).appendChild(pic)
       
        let di = document.createElement('div')
        di.classList.add('cart__product-count')
        let tex = values[index].innerText
        let te = document.createTextNode(tex)
        di.appendChild(te)

        document.querySelector(`[data-id="${id}"]`).appendChild(di)
        
        let rez = []
            let xx = Array.from(document.querySelectorAll('.cart__product'))
            xx.forEach((x) => {
                
                let y = x.getAttribute('data-id')
                rez.push(y)
                
                console.log(x.dataset.id)
               
            })

            
            console.log(rez)
            
            //console.log(xx.includes(id))
            //console.log(xx[0].getAttribute('data-id'))
            //let y = x.getAttribute('data-id')
            //let y = x.querySelector(`[data-id="${id}"]`)
        
        
    }
})