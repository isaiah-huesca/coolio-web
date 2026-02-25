    box = document.querySelector("div")
    delta = 0
    syn = .6
    rot= 0
    setInterval(function() {
        syn= Math.random(0,1)
        if(syn <.5){
            delta =-(delta)
        }
        delta += Math.random(-5, 5)
        box.style.width = `${delta}px`
        syn= Math.random(0,1)
        if(syn >.5){
            delta =-(delta)
        }
        delta += Math.random(-5, 5)
        box.style.height = `${delta}px`
        rot += 
    }, 0);
