let circ = document.querySelectorAll('.circles .item')[0]
let circs = Array.from(document.querySelectorAll('.circles .item'))
let circsNotFirsts = circs.slice(1)

console.log(circs)

circ.onmouseover = () => {
    circsNotFirsts.forEach((circsNotFirst) => {
        circsNotFirst.style.width= '144px'
        circsNotFirst.style.height= '144px'
    })
}
circ.onmouseout = () => {
    circsNotFirsts.forEach((circsNotFirst) => {
        circsNotFirst.style.width= '120px'
        circsNotFirst.style.height= '120px'
    })
}

let cubs = Array.from(document.querySelectorAll('.squares .item'))
keyCubs = Object.keys(cubs)
console.log(keyCubs)

cubs.forEach((cub, index) => { 
    cub.onclick = (e) => {
        let clickBy = e.target = index
        console.log(clickBy)
       /* circs.forEach((cir, index) => {
            index = clickBy;
// найти по индексу, файнд индекс
            cir.style.backgroundColor = 'red'
            console.log(index)
        })*/
    }
})



//console.log(cubs.findIndex())
/*function clic() {
    cubs.onclick = () => {
    }
}
let ib = cubs.findIndex(clic)*/


    
//console.log(count)