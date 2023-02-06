let sliderPrev = document.getElementsByClassName('slider__arrow_prev')[0]
let sliderNext = document.getElementsByClassName('slider__arrow_next')[0]
let sliders = Array.from(document.querySelectorAll('.slider__item'))
let actSliders = Array.from(document.getElementsByClassName('slider__item slider__item_active'))

console.log(sliderPrev, sliderNext)
console.log(sliders)
console.log(actSliders)

sliderPrev.onclick = () => {
    sliders.forEach((slider) => {
        for (let i = 0; i < sliders.length; i++)
        console.log(sliders.length)
        actSliders.forEach((actSlider) => {
            actSlider.classList.remove('slider__item_active')
            actSlider += slider[i + 1]
            actSlider.classList.add('slider__item_active')

        })
        

    })
}