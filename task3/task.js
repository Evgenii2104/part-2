
let holes = Array.from(document.getElementsByClassName('hole'));
let res = holes.forEach((hole) => {
    hole.onclick = (event) => {
        console.log(event.target.classList.contains('hole_has-mole'))
        checClick()
    }

})

let kill = 0;
let miss = 0;
//console.log(document.getElementById("dead").innerHTML = 2)
//console.log(res)
function checClick() {

      if (event.target.classList.contains('hole_has-mole')) {
        kill++
         document.getElementById('dead').innerHTML = kill;
        if (kill > 9) {
            alert ('you win')
        }
         
    } else {
        miss++
        document.getElementById('lost').innerHTML = miss;
        if (miss > 4) {
            alert ('you loser')
        }
    }
}

//console.log(checClick())
//for (let name of hole)

//console.log(hole.classList.contains( 'hole_has-mole' ))*/
