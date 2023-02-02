let cir = Array.from(document.querySelectorAll('.circles .item'));
let cubs = Array.from(document.querySelectorAll('.squares .item'))

//console.log(cir, cub)

let tcircs = cir.filter((item, index) => index % 2)
tcircs.forEach((tcir) => {
    tcir.style.backgroundColor = 'red'
})

 cubs.forEach((cub) => {
    cub.innerText = `${(cubs.indexOf(cub) + 1)}`
})
