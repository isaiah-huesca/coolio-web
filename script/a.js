    box = document.querySelector("div")
    delta = 0

    setInterval(function() {
        delta += Math.random(-1, 1)
        box.style.width = `${delta}px`
        delta += Math.random(-1, 1)
        box.style.height = `${delta}px`
    }, 10);
