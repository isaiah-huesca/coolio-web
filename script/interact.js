bx = document.querySelector(".rect")
bg = document.querySelector("body")

x = 0
y = 0
theta = 0
sec = 0
val1 = 0
val2 = 0

bx.addEventListener('click', () => {

    cr = Math.random() * 256
    cg = Math.random() * 256
    cb = Math.random() * 256
    console.log("red ")
    console.log(cr)
    console.log("green ")
    console.log(cg)
    console.log("blue ")
    console.log(cb)

    val1 = Math.random()
    val2 = Math.random()

    if (val1 > .5) {
        y += Math.floor(Math.random() * 300 + 1)
    } else {
        y -= Math.floor(Math.random() * 300 + 1)
    }
    if (val2 > .5) {
        x += Math.floor(Math.random() * 300 + 1)
    } else {
        x -= Math.floor(Math.random() * 300 + 1)
    }
    if (x < -200) {
        x = 0
    }
    if (y < -300) {
        y = 0
    }
    if (val1 - val2 > 0) {
        delta = Math.floor(Math.random() * 350 + 1)
    } else {
        delta = -(Math.floor(Math.random() * 350 + 1))
    }
    theta += delta
    org1 = (Math.random() * 100)
    org2 = (Math.random() * 100)
    sec = (Math.random() * 1 + .05)
    bx.style.transformOrigin = `${org1}% ${org2}%`
    bx.style.transition = `transform ${sec}s`
    bx.style.transform = `translate(${x}px,${y}px) rotate(${theta}deg)`
    console.log(theta, sec)
    console.log(x, y)
    bx.style.backgroundColor = `rgb(${cr} ${cg} ${cb})`
    bg.style.backgroundColor = `rgb(${cb} ${cr} ${cg})`

})
