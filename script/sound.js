buttons = document.querySelector('.butons')
boo = document.querySelector('.boo')
btn = document.createElement('button')
btn.innerText = "click me"
btn.addClassList('btn')
buttons.addEventListener('click', () => {
    boo.play()
})
buttons.appendChild(btn)
