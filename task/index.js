let rub = document.querySelector('#items')
let valus = null
let formaData = new FormData()
let request = new XMLHttpRequest()
request.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses')
/*request.onload = function() {
    poemDisplay.textContent = request.response
}*/

request.send(formaData)
request.onreadystatechange = function() {
    if(request.readyState === 4) {
        let rez = request.responseText
        let valus = JSON.parse(rez).response.Valute
        let download = document.querySelector('.loader_active')
        download.classList.remove('loader_active')

        let char = Object.values(valus)
        for (let i = 0; i < char.length; i++) {
            let div = document.createElement('div')
            div.classList.add('item__code')
            let tex = char[i].CharCode
            let te = document.createTextNode(tex)
            div.appendChild(te)
            document.querySelector('.item').appendChild(div)

            let divv = document.createElement('div')
            divv.classList.add('item__value')
            let texx = char[i].Value
            let tee = document.createTextNode(texx)
            divv.appendChild(tee)
           // divv.style.marginRight = '15px'
            document.querySelector('.item').appendChild(divv)
            document.querySelector('.item').style.display = 'block'

            //console.log(char[i].CharCode.innerText)
           /// console.log(char[i].Value)
        }
        
        
        
        //console.log(request.responseText)
        //console.log(rez)
    }
}
console.log(request)

function see() {
    for (let i = 0; i < valus.leneght; i++) {
        console.log(valus.CharCode[i])
    }
     
}