const buttons = document.querySelector('.butons')
const sounds = document.querySelectorAll('audio')
for(let sound of sounds){
btn = document.createElement('button')
btn.classList.add('btn')
btn.innerText = "click me"

}
buttons.addEventListener('click', () => {
    boo.play()
})
buttons.appendChild(btn)
