    box = document.querySelector("div")
    delta = 0
    syn = .6
    rot= .12
    setInterval(function() {
        syn = Math.random(0,1)
        if(syn <.5){
            delta =-(delta)
        }
        delta += Math.random(-10, 10)
        box.style.width = `${delta}px`
        syn= Math.random(0,1)
        if(syn >.5){
            delta =-(delta)
        }
        delta += Math.random(-10, 10)
        box.style.height = `${delta}px`
        syn= Math.random(0,1)
        rot+= (Math.random(0,1)/5)
        if(syn >.5){
            rot -= (rot)
        }
        box.style.transform=`rotate(${rot}turn)`
    }, 0);
