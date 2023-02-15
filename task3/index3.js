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


    
    size.forEach((siz) => {
        siz.onclick = () => {
            //let act = document.querySelector('.font-size_active')
            //act.classList.remove('font-size_active')
            //console.log(act)
            
            siz.classList.add('font-size_active')
            content.classList.add()
        }
    })

        
        
   
