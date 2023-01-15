
let holes = Array.from(document.getElementsByClassName('hole'));
let res = holes.forEach((hole) => {
    hole.onclick = (event) => {
        console.log(event.target.classList.contains('hole_has-mole'))
        checClick()
    }

})

let kill = 0;
let miss = 0;

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

