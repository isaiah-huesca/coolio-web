const player = 0
const bot = 0
const ball = document.querySelector(".ball")
x = 0
y = 0
a = 0
t = 1

setInterval(updateInput, 60);
setInterval(updateVisual, 60);

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
function updateInput() {
    if (keysPressed['ArrowLeft']) {
        console.log("left", x)
        x -= (a + 1)
        a++
        clamp(a, 0, 50)
    } else if (keysPressed['ArrowRight']) {
        console.log("right", x)
        x += (a + 1)
        a++
        clamp(a, 0, 50)
    } else {
        if (keysPressed['ArrowRight'] == 0) {
            
            for (let i = a; i > 1; i--) {
                a--
                clamp(a, 0, 50)

                x += (a - 1)
                console.log("N/A", x)

            }
        }
        if (keysPressed['ArrowLeft'] == 0) {
            for (let i = a; i > 1; i--) {

                a--
                clamp(a, 0, 50)

                x -= (a + 1)
                console.log("N/A", x)

            }
        }
        console.log("N/A", x)
    }
}

function updateVisual() {
    ball.style.transition = `transform ${1 / a}s ease-out`
    ball.style.transform = `translate(${x}px)`
}

function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
