let sizeButton = Array.from(document.querySelectorAll('a.font-size'))
let content = document.querySelector('.book__content')
let textButton = Array.from(document.querySelectorAll('.book__control_color > .color'))
let backgroundButton = Array.from(document.querySelectorAll('.book__control_background > .color'))
//let textButton1 = textButton.querySelectorAll('.color')
//let target = null
console.log(backgroundButton)
//let act = document.querySelector('.font-size_active')

    sizeButton.forEach((siz) => {   
        siz.onclick = (event) => {
            event.preventDefault()
            let target = event.target.className
            let act = document.querySelector('.font-size_active')
            act.classList.remove('font-size_active')
            siz.classList.add('font-size_active')
        
            if (target.includes('small')) {
                content.classList.remove('book_fs-big')
                content.classList.add('book_fs-small')
            } else if (target.includes('big')) {
                content.classList.remove('book_fs-small')
                content.classList.add('book_fs-big')
            } else {
                content.classList.remove('book_fs-big')
                content.classList.remove('book_fs-small')
            }
        }
    })

    textButton.forEach((text) => {   
        text.onclick = (event) => {
            event.preventDefault()
            let target = event.target.className
            let act = document.querySelector('.color_active')
            act.classList.remove('color_active')
            text.classList.add('color_active')
        
            if (target.includes('gray')) {
                content.classList.remove('book_color-black')
                content.classList.remove('book_color-whitesmoke')
                content.classList.add('book_color-gray')
            } else if (target.includes('whitesmoke')) {
                content.classList.remove('book_color-black')
                content.classList.remove('book_color-gray')
                content.classList.add('book_color-whitesmoke')
            } else {
                content.classList.remove('book_color-gray')
                content.classList.remove('book_color-whitesmoke')
            }
        }
    })

    backgroundButton.forEach((back) => {   
        back.onclick = (event) => {
            event.preventDefault()
            let target = event.target.className
            let act = document.querySelector('.color_active')
            act.classList.remove('color_active')
            back.classList.add('color_active')
        
            if (target.includes('gray')) {
                content.classList.remove('book_bg-black')
                content.classList.remove('book_bg-white')
                content.classList.add('book_bg-gray')
            } else if (target.includes('white')) {
                content.classList.remove('book_bg-black')
                content.classList.remove('book_bg-gray')
                content.classList.add('book_bg-white')
            } else {
                content.classList.remove('book_bg-gray')
                content.classList.remove('book_bg-white')
                content.classList.add('book_bg-black')
            }
        }
    })
    
        
        
   
