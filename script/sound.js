const buttons = document.querySelector('.butons')
const sounds = document.querySelectorAll('audio')
for(let sound of sounds){
btn = document.createElement('button')

}
btn.innerText = "click me"
btn.classList.add('btn')
buttons.addEventListener('click', () => {
    boo.play()
})
buttons.appendChild(btn)
