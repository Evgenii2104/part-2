let size = Array.from(document.querySelectorAll('a.font-size'))
let content = document.querySelector('.book__content')
//let target = null
console.log(size)
//let act = document.querySelector('.font-size_active')



/*size.onclick = () => {
for(let i = 0; i < size.length; i++) {   
    
        //let act = document.querySelector('.font-size_active')
         //   act.classList.remove('font-size_active')
    
    size[i].classList.toggle('font-size_active')
    console.log(size.length)
}
}*/



    size.forEach((siz, event) => {
        let target = event
        console.log(target)
        
        siz.onclick = () => {
            let act = document.querySelector('.font-size_active')
            act.classList.remove('font-size_active')
            siz.classList.add('font-size_active')

            if (target == 0) {
                content.classList.toggle('book_fs-small')
            } if (target == 2) {
                content.classList.toggle('book_fs-big')
            }
        }
    })


    /*function foo(event) {
        let target = event.target
        console.log(target)
    }*/
        
        
   
