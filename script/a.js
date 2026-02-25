    box = document.querySelector("div")


    setInterval(function() {
        delta = box.style.width
        delta += Math.random(-1, 1)
        console.log(delta)
        box.style.width = `${delta}px`
    }, 100);
