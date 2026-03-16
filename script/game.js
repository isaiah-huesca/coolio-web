const player
const bot
const ball
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
  if (keysPressed['ArrowRight']) {
    console.log("right")
  }
  // Call this function within window.requestAnimationFrame or a setInterval
}

let intervalID = setInterval(updateGame, 50);
