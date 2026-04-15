const keysPressed = {};
const ball = document.querySelector(".ball")
const bot = 0 // undef
const player = document.querySelector(".player")
const pSz = player.getBoundingClientRect();
const ballsz = ball.getBoundingClientRect();
const ptb = player.offsetTop;

vw = 1
vh = 1
playerY = 1
playerX = player.x
a = 0
c = 0
d = 1
timeTransition = 0
pvx = Math.floor((Math.random() * 5) + 6);
vx = Math.floor((Math.random() * 5) + 5);
vy = Math.floor((Math.random() * 5) + 1);
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

function GAME() {
    playerControll();
    updVs();
    isColliding();
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
    a+= .5
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
        }
        else if (-ptb > playerY) {
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


    if (x > (blr)) {
        vx = -vx;
    }
    else if (x < (-blr)) {
        vx = -vx;
    }

    if (y > (btb)) {
        vy = -vy;
    }
    else if (y < (-btb)) {
        vy = -vy;
    }
    if (touch == 1) {
        vx = -vx
    }

    y += vy;
    x += vx;

    console.log(blr, btb, x, y, vx, vy, playerY)
}

function isColliding() {
    if ((playerY + 45 > y && playerY - 45 < y) && (playerX + 5 > x && playerX - 5 < x)) {
        touch = 1
    }
    else {
        touch = 0
    }
}

function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
