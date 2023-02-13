let size = Array.from(document.querySelectorAll('.font-size'))
//let target = null
console.log(size)

size.onclick = (event) => {
    let target = event
    console.log(target.classNamet)
    /*size.forEach((siz) => {
        //let target = siz.getAttribute('font-size') 
        //console.log(target.className)
    })*/
}