buttons = document.querySelector('.butons')
sounds = document.querySelector('.boo')
btn = document.createElement('button')
btn.innerText = "click me"
btn.classList.add('btn')
buttons.addEventListener('click', () => {
    boo.play()
})
buttons.appendChild(btn)
