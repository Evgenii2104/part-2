//let formaData = new FormData()

let request = new XMLHttpRequest()
request.open('GET', ' https://students.netoservices.ru/nestjs-backend/poll')
request.send()

request.onreadystatechange = function() {
    if(request.readyState === 4) {
        let tex = request.responseText
        let question = JSON.parse(tex).data.title
        let questionId = JSON.parse(tex).id
        let answer = JSON.parse(tex).data.answers
        console.log(questionId)

        let div = document.createElement('div')
        let questio = document.createTextNode(question)
        div.appendChild(questio)
        document.querySelector('.poll__title').appendChild(div)

        let char = Object.values(answer)
        for(let i = 0; i < char.length; i++) {
            let buttons = document.createElement('button')
            buttons.classList.add('poll__answer')
            let answ = document.createTextNode(char[i])
            buttons.appendChild(answ)
            document.querySelector('.poll__answers').appendChild(buttons)
        }


        let but = Array.from(document.querySelectorAll('.poll__answer'))
        but.forEach((bu) => {
            bu.onclick = () => {
                //alert('Спасибо, ваш голос засчитан!')

                let xhr = new XMLHttpRequest();
                //let body = 'name=' + encodeURIComponent(bu)
                xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                
                xhr.send('vote=1&answer=0');
                xhr.onreadystatechange = function() {
                    if(xhr.readyState === 4) {
                        let rez = xhr.responseText
                        let answ = JSON.parse(rez).stat
                        let an = Object.values(answ)

                        for(let j = 0; j < an.length; j++) {
                            let divv = document.createElement('div')
                            let texx = (`${an[j].answer}` + `${an[j].votes}` + '%')
                            let te = document.createTextNode(texx)
                            divv.appendChild(te)
                            document.querySelector('.poll__answers').appendChild(divv)

                            console.log(an[j].answer)
                            console.log(an[j].votes)
                        }
                        //console.log(an)
                    }
                }
                
            
        }
        })
        
        //console.log(but)
        //console.log(char)
        //console.log(question)
    }
}


