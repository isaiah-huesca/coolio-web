const player = 0
const bot = 0
const ball = document.querySelector(".ball")
y = 0
x = 0
a = 0
t = 1
c = 0

setInterval(updateInput, 50);
setInterval(updateVisual, 50);

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
    if (keysPressed['ArrowUp']) {
        console.log("up", y)
        y -= (a + 1)
        a++
        clamp(a, 0, 50)
        c = 1
    } else if (keysPressed['ArrowDown']) {
        console.log("down", y)
        y += (a + 1)
        a++
        clamp(a, 0, 50)
        c = 2
    } else {
        if (c == 2) {
            for (let i = a; i > 1; i--) {
                a--
                clamp(a, 0, 50)

                y += (a - 1)
                console.log("N/A", y)
            }
            c = 0
        }
        if (c == 1) {
            for (let i = a; i > 1; i--) {

                a--
                clamp(a, 0, 50)

                y -= (a + 1)
                console.log("N/A", y)
            }
            c = 0
        }
        console.log("N/A", y)
    }
}

function updateVisual() {
    ball.style.transition = `transform ${1 / a}s ease-out`
    ball.style.transform = `translate(${x}px, ${y}px)`
}

function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
