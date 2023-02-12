let circ = document.querySelectorAll('.circles .item')[0]
let circs = Array.from(document.querySelectorAll('.circles .item'))
let circsNotFirsts = circs.slice(1)

//console.log(circs)

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
//console.log(keyCubs)

cubs.forEach((cub, index) => { 
    cub.onclick = (e) => {
        let clickBy = e.target = index;
        //console.log(clickBy)
        //console.log(circs[clickBy])
        circs[clickBy].style.backgroundColor = 'red';        
    }
})



let button = document.querySelector('.green-button')
//let rhombs = Array.from(document.querySelectorAll('.rhombuses .item'))
let rhomb = Array.from(document.querySelectorAll('.rhombuses > .item'))[0]
let rh = document.querySelector('.container.rhombuses')

console.log(rh)


button.onclick = () => {
    /*let newDiv = document.createElement('div')
    newDiv.classList.add('item')
    rh.appendCild(newDiv)*/
    let x = rhomb.cloneNode(true)
    console.log(x)
    rh.appendChild(x)
    console.log(x)
    
}