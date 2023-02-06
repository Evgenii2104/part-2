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
        let clickBy = e.target = index;
        //console.log(clickBy)
        //console.log(circs[clickBy])
        circs[clickBy].style.backgroundColor = 'red';        
    }
})



let button = Array.from(document.getElementsByClassName('green-button'))
let rhombs = Array.from(document.querySelectorAll('.rhombuses .item'))
let rhomb = document.querySelector('.rhombuses .item')
let rh = document.querySelectorAll('.body > .container rhombuses')

console.log(button, rhombs, rhomb, rh)

//let x = rhomb.cloneNode(true)
let x = rhomb.cloneNode()
//x.classList.add('item')
//rhombs.push(x)
//rh.appendChild(x)
rh.innerHTML.appendChild(x) += '<div class="item"></div>'
console.log(x, rhombs, rhomb)

button.onclick = () => {
    //let newDiv = document.createElement('div')
    //newDiv.classList.add('item')
    let x = rhomb.cloneNode(true)
    rh.appendChild(x)
    console.log(x)
    //rh.innerHTML = '<div class="item"></div>'
}