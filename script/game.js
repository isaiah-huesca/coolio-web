const player = 0
const bot = 0
const ball = document.querySelector(".ball")
x = 0
y = 0
a = x
let intervalID = setInterval(updateGame, 75);

const keysPressed = {};
document.addEventListener('keydown', (event) => {
    // Use event.code to track physical keys consistently
    if (!event.repeat) { // Ignore repeated keydown events when key is held down
        keysPressed[event.code] = true;
    }
});

document.addEventListener('keyup', (event) => {
    keysPressed[event.code] = false;
});

// In a game loop or animation frame:
function updateGame() {
    a = x
    if (keysPressed['ArrowLeft']) {
        console.log("left")
        x -= (a + 1)
    }
    else if (keysPressed['ArrowRight']) {
        console.log("right")
        x += (a + 1)
    }
    else {
        a = 1
        console.log("N/A")
    }
    console.log(x)
    ball.style.transform = `translate(${x}px)`
}

