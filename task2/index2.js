let texts = Array.from(document.querySelectorAll('.rotator__case'))
let count = 1

console.log(texts)

let show = function() {
    texts.forEach((text, index) => {
            text.classList.toggle('rotator__case_active', count == index)     
    });
    count++
    if (count >= texts.length) {
        count = 0
    }
}

setInterval(show, 1000)