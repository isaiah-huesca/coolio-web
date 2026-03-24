const player = 0
const bot = 0
const ball = document.querySelector(".ball")
y = 0
x = 0
a_y = 0
a_x = 0
t = 1
cx = 0
cy = 0

setInterval(updateInputY, 50);
setInterval(updateInputX, 50);
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
    setInterval(updateVisual, 50);
});

// In a_ygame loop or animation frame:
function updateInputY() {
    if (keysPressed['ArrowUp']) {
        console.log("up", y)
        y -= (a_y + 1)
        a_y++
        clamp(a_y, 0, 50)
        cy = 1
    } else if (keysPressed['ArrowDown']) {
        console.log("down", y)
        y += (a_y + 1)
        a_y++
        clamp(a_y, 0, 50)
        cy = 2
    } else {
        for(let i = a_y; i < 1; i-- ) {
            if (cy == 2) {
                a_y--
                clamp(a_y, 0, 50)
                y += (a_y - 1)
                console.log("down", y)
            } else if (cy == 1) {
                a_y--
                clamp(a_y, 0, 50)
                y -= (a_y + 1)
                console.log("up", y)
            }
        }
    }
    cy=0
}

function updateInputX() {
    if (keysPressed['ArrowLeft']) {
        console.log("up", x)
        x -= (a_x + 1)
        a_x++
        clamp(a_x, 0, 50)
        cx = 3
    } else if (keysPressed['ArrowRight']) {
        console.log("down", x)
        x += (a_x + 1)
        a_x++
        clamp(a_x, 0, 50)
        cx = 4
    } else {
        for(let i = a_x; i > 0; i-- ) {
            if (cx == 3) {
                a_x--
                clamp(a_x, 0, 50)
                x += (a_x - 1)
                console.log("left", x)
            } else if (cx == 4) {
                a_x--
                clamp(a_x, 0, 50)
                x -= (a_x + 1)
                console.log("right", x)
            }
        }
        cx = 0
        console.log("N/A", x)
    }
}

function updateVisual() {
    ball.style.transition = `transform ${1 / ((a_y+a_x)/2)}s ease-out`
    ball.style.transform = `translate(${x}px, ${y}px)`
}

function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
