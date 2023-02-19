let sliderPrev = document.getElementsByClassName('slider__arrow_prev')[0]
let sliderNext = document.getElementsByClassName('slider__arrow_next')[0]
let sliders = Array.from(document.querySelectorAll('.slider__item'))
//let actSliders = Array.from(document.getElementsByClassName('slider__item_active'))

console.log(sliderPrev, sliderNext)
console.log(sliders.length)

let count = 1
document.addEventListener('click', showNext)
//document.addEventListener('click', showPrev)



 function showNext() {
    
    sliderNext.onclick = () => {
         let actSliders = document.querySelector('.slider__item_active')
         actSliders.classList.remove('slider__item_active')
         sliders[count].classList.add('slider__item_active')           
         console.log(sliders[count])
        }
        count++
        if (count >= sliders.length) {
            count = 0
        }


        }
    
    
    /*function showPrev() {
        sliderPrev.onclick = () => {
            
            let actSliders = document.querySelector('.slider__item_active')
            actSliders.classList.remove('slider__item_active')
            sliders[count].classList.add('slider__item_active')           
            console.log(sliders[count])
           }
        
           count--
           if (count <= -1) {
            count = 5
        } 

           console.log(count)
           
    }    
    
 
console.log(count)*/





/*sliders.forEach((slider, index) => {
sliderNext.onclick = () => {
    
        let actSliders = document.querySelector('.slider__item_active')
       actSliders.classList.remove('slider__item_active')
       slider.classList.add('slider__item_active')
       count++
       console.log(index)
} 

})
*/
