let rub = document.querySelector('#items')
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
        let v =  new Object(valus)
        console.log(v.CharCode)
        
        //console.log(request.responseText)
        //console.log(rez)
    }
}
console.log(request)