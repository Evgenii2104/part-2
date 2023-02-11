let butts = Array.from(document.querySelectorAll('.tab__navigation > .tab'));
let content = Array.from(document.querySelectorAll('.tab__contents > .tab__content'));


console.log(butts, content)

butts.forEach((butt) => {

butt.onclick = (event) => {
    let contentActs = Array.from(document.querySelectorAll('.tab__content_active'))
    contentActs.forEach((contentAct) => {
        contentAct.classList.remove('tab__content_active')
    })
    let buttActs = Array.from(document.querySelectorAll('.tab.tab_active'))
    buttActs.forEach((buttAct) => {
        buttAct.classList.remove('tab_active')
        })
    butt.classList.add('tab_active')
    let x = butts.indexOf(event.target)
    console.log(x)
    content[x].classList.add('tab__content_active')
    
    }
})


