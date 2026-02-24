search=document.querySelector('.search')
btn=document.querySelector('.btn')

btn.addEventListener('click', ()=> {
    search.classList.toggle('active')
})
r1 = |r1+ randomInt(-1,1)|
g1 = |g1+ randomInt(-1,1)|
b1 = |b1+ randomInt(-1,1)|
function randomInt(min, max) {
  // Use Math.ceil() and Math.floor() to ensure min/max are treated as integers
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
