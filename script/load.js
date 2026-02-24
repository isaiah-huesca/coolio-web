loadTxt = document.querySelector('.loadtxt')
bg = document.querySelector('.bg')

load = 0
loadtxt.innerText = `${load}%`
bg.style.opacity = 1 - (load / 100)
bg.style.filter = "blur(50px)"
