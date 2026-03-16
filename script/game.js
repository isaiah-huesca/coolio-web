const player = 0
const bot = 0
const ball = 0
x = 0
y = 0


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
    if (keysPressed['ArrowLeft']) {
        console.log("left")
    }
    else if (keysPressed['ArrowRight']) {
        console.log("right")
    }
    else{
        console.log("N/A")
    }
    // Call this function within window.requestAnimationFrame or a setInterval
}

let intervalID = setInterval(updateGame, 100);
