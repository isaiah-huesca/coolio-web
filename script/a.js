    box = document.querySelector("div")
    delta =0

    setInterval(function() {
        delta += Math.random(-1, 1)
        box.style.width = `${delta}px`
    }, 100);
