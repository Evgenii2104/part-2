

  let shows = Array.from(document.querySelectorAll('.reveal'))
  

  console.log(shows)


  document.addEventListener("scroll", myFunction)

  function myFunction() {
    let viewHeight = window.innerHeight
    console.log(viewHeight)
    
    shows.forEach((show) => {
      let showsTop = show.getBoundingClientRect().top
      console.log(showsTop)
    if (showsTop < viewHeight) {
        show.classList.add('reveal_active')   
    } else {
      show.classList.remove('reveal_active')
    }
  });
  }

  