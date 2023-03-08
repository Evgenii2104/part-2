let formTex = document.getElementById('signin__form')
let formName = formTex.querySelectorAll('.control')[0]
let formId = formTex.querySelectorAll('.control')[1]
let btnSign = document.getElementById('signin__btn')

console.log(formName, btnSign)
console.log(formId)

function submitForm(e) {
    e.preventDefault();
const form = new FormData(document.form); 
const xhr = new XMLHttpRequest()
xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth')
xhr.setRequestHeader('Content-type', 'application/json')
xhr.send(form)

console.log(xhr.status)
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
        let tex = xhr.responseText
        let question = JSON.parse(tex)//.data.title
        //let questionId = JSON.parse(tex).id
        //let answer = JSON.parse(tex).data.answers
        console.log(question)
    }
}
}

btnSign.addEventListener('formTex', submitForm);
