const keysPressed = {};
const ball = document.querySelector(".ball")
const bot = 0 // undef
const player = document.querySelector(".player")
vw=1
playerY = 1
a = 0
c = 0
d = 1
timeTransition = 0
v = 0;
x = 0;
vwToPx(vw);
setInterval(vwToPx,50000)
setInterval(updInpt, 100);
setInterval(updVs, 100)
setInterval(ballMove, 100)

document.addEventListener('keydown', (event) => {
    // Use event.code to track physical keys consistently
    if (!event.repeat) { // Ignore repeated keydown events when key is held down
        if (event.code == 'ArrowUp' || event.code == 'ArrowDown') {
            keysPressed['ArrowUp'] = false;
            keysPressed['ArrowDown'] = false;
            keysPressed['Space'] = false;
            keysPressed[event.code] = true;
        } else if (event.code == 'Space') {
            keysPressed['ArrowUp'] = false;
            keysPressed['ArrowDown'] = false;
            keysPressed[event.code] = true;
            c = 0
        }
        console.log(keysPressed)
    }
});

function vwToPx(vw) {
  return (vw * window.innerWidth) / 100;
}

function updInpt() {
    if (keysPressed['ArrowUp'] == 1) {
        playerY -= (1 + (a))
        if (c != 1) {
            a = 0
        }
        c = 1
    } else if (keysPressed['ArrowDown'] == 1) {
        playerY += (1 + (a))
        if (c != 2) {
            a = 0
        }
        c = 2
    } else if (c == 0) {
        a = 0
        c = 0
    }
    a += ((a % 10) + 1)
    console.log(playerY, a, timeTransition)
}

function updVs() {
    timeTransition = a / 2
    player.style.transition = `transform ${5 / (timeTransition)}s ease-out`
    player.style.transform = `translate(0px, ${playerY}px)`
    ball.style.transition = `transform ${Math.abs(2 / (v))}s ease-in`
    ball.style.transform = `translate(${x}px)`

}

function ballMove() {
const bwr = ball.offsetLeft;

    v = 0;
    if (d != 0) {
        if (d == 1) {
            v = 10

        }
        else {
            v = -10
        }
    }
    if(bwr >= (x)){
        d=2
    }
    else if(-(bwr) >= (x)){
        d=1
    }
    x += v;

console.log(-bwr,bwr,x)
}

function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
