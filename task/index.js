let but = document.querySelector('.dropdown__value')
let menus = document.querySelector('.dropdown__list')


console.log(but, menus)

but.onclick = () => {
    console.log(but.textContent)
    menus.classList.toggle('dropdown__list_active')

    let texs = Array.from(document.querySelectorAll('a'))
    console.log(texs)
    texs.forEach((tex) => {
        tex.onclick = (event) => {
        
        let targget = event.target
        console.log(targget)
        but.textContent = targget.textContent
        }
    })
}




