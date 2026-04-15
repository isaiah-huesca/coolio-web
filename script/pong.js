const keysPressed = {};
const ball = document.querySelector(".ball")
const bot = 0 // undef
const player = document.querySelector(".player")
const plr = player.getBoundingClientRect();
const bl = ball.getBoundingClientRect();
const ptb = player.offsetTop;

vw = 1
vh = 1
playerY = 1
playerX = player.x
a = 0
c = 0
d = 1
timeTransition = 0
pvx = rand(5, 10)
vx = rand(1, 10)
vy = rand(1, 10)
x = 0;
y = 0;
touch = 0;

vwToPx(vw);
vhToPx(vh);

setInterval(vwToPx, 50000);
GAME;
requestAnimationFrame(GAME);
setInterval(console.clear, 30000);


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
document.addEventListener('keyup', (event) => {
    // Use event.code to track physical keys consistently
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
});

function GAME() {
    playerControll();
    updVs();
    ballMove();
    requestAnimationFrame(GAME)
}

function vwToPx(vw) {
    return (vw * window.innerWidth) / 100;
}

function vhToPx(vh) {
    return (vh * window.innerHeight) / 100;
}

function playerControll() {
    a += .5
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
    if (ptb < playerY || -ptb > playerY) {
        if (ptb < playerY) {
            playerY = ptb
        } else if (-ptb > playerY) {
            playerY = -ptb
        }
        a = 0
        keysPressed['ArrowUp'] = false;
        keysPressed['ArrowDown'] = false;
        keysPressed['Space'] = false;
    }
    console.log(playerY, ptb, a, timeTransition)
}

function updVs() {
    timeTransition = a / 2
    player.style.transform = `translate(0px, ${playerY}px)`
    ball.style.transform = `translate(${x}px, ${y}px)`

}

function ballMove() {
    const blr = ball.offsetLeft;
    const btb = ball.offsetTop;
    d = rand(0, 2);


    if (x > (blr)) {
        vx = -vx;
        if (rand(0, 2) == rand(0, 2)) {
                vy = rand(1, 10)
            }
        if (d == rand(0, 2)) {
            vy = -vy;
        }
    } else if (x < (-blr)) {
        vx = -vx;
        if (rand(0, 2) == rand(0, 2)) {
                vy = rand(1, 10)
            }
        if (d == rand(0, 2)) {
            vy = -vy;

        }
    }

    if (y > (btb)) {
        vy = -vy;
        if (rand(0, 2) == rand(0, 2)) {
                vx = rand(1, 10)
            }
        if (d == rand(0, 2)) {
            vx = -vx;
        }
    } else if (y < (-btb)) {
        vy = -vy;
        if (rand(0, 2) == rand(0, 2)) {
                vx = rand(1, 10)
            }
        if (d == rand(0, 2)) {
            vx = -vx;
        }
    }
    touch = checkCollision(bl, plr);

    if (touch == 1) {
        vx = -vx
    }

    y += vy;
    x += vx;

    console.log(blr, btb, x, y, vx, vy, playerY)
}

function checkCollision(rect1, rect2) {
    return (
        rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y
    );
}

function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
