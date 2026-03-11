clbx = document.querySelector(".click")
spbx = document.querySelector(".spin")
kbx = document.querySelector(".key")
hbx = document.querySelector(".hover")
dblbx = document.querySelector(".dbcl")



clbx.addEventListener('click', () => {

    cr = Math.random() * 256
    cg = Math.random() * 256
    cb = Math.random() * 256
    console.log("red ")
    console.log(cr)
    console.log("green ")
    console.log(cg)
    console.log("blue ")
    console.log(cb)
    clbx.style.backgroundColor = `rgb(${cr} ${cg} ${cb})`
})

spbx.addEventListener('click', () => {
    spbx.classList.add("start")
})

x = 0
y = 0
rot = 0
sec = 0
document.addEventListener('keydown', (event) => {
    if (event.key == 'ArrowRight') {
        x += 10
        rot += 90
    }
    if (event.key == 'ArrowUp') {
        y -= 10
        rot -= 90

    }
    if (event.key == 'ArrowLeft') {
        x -= 10
        rot -= 90

    }
    if (event.key == 'ArrowDown') {
        y += 10
        rot += 90

    }

    org1 = (Math.random() * 100)
    org2 = (Math.random() * 100)
    sec = (Math.random() * 2 + .05)
    kbx.style.transformOrigin = `${org1}% ${org2}%`
    kbx.style.transition = `transform ${sec}s `
    kbx.style.transform = `translate(${x}px,${y}px) rotate(${rot}deg)`
    console.log(rot, sec)
})

hbx.addEventListener('mouseenter', () => {
    hover = 1
    console.log(true)
    if (hover == 1) {
        console.log(true)
        cr = Math.random() * 256
        cg = Math.random() * 256
        cb = Math.random() * 256
        console.log("red ")
        console.log(cr)
        console.log("green ")
        console.log(cg)
        console.log("blue ")
        console.log(cb)
        hbx.style.backgroundColor = `rgb(${cr} ${cg} ${cb})`
    }
    axsx = 0
    axsy = 0
    val = Math.random()
    if (val > .5) {
        axsx += (Math.random() * 50 + 50)
        axsy += (Math.random() * 50 + 50)
    } else {
        axsx -= (Math.random() * 50 + 50)
        axsy -= (Math.random() * 50 + 50)
    }

    hbx.style.transform = `translate(${axsx}px,${axsy}px)`



})
hbx.addEventListener('mouseleave', () => {
    hover = 0
    console.log(false)
})

dblbx.addEventListener('dblclick', () => {
    setInterval(function() {
        window.close("event.html")
    }, 200)
})
