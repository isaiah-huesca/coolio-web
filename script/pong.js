const keysPressed = {};
const ball = document.querySelector(".ball")
const bot = 0 // undef
const player = document.querySelector(".player")

const ptb = player.offsetTop;

vw = 1
vh = 1
playerY = 1
playerX = (45 * window.innerWidth) / 100
acceleration = 0
lastKeyPresed = 0
directionChance = 1
timeTransition = 0
playerVelocityY = 11
ballVX = rand(1, 9)
ballVY = rand(1, 9)
ballX = 0;
ballY = 0;
collision = 0;

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
            lastKeyPresed = 0
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
        lastKeyPresed = 0
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
        playerX = (45 * window.innerWidth) / 100
    if (keysPressed['ArrowUp'] == 1) {
        playerY -= playerVelocityY
        if (lastKeyPresed != 1) {
            acceleration = 0
        }
        lastKeyPresed = 1
    } else if (keysPressed['ArrowDown'] == 1) {
        playerY += playerVelocityY
        if (lastKeyPresed != 2) {
            acceleration = 0
        }
        lastKeyPresed = 2
    } else if (lastKeyPresed == 0) {
        acceleration = 0
        lastKeyPresed = 0
    }
    if (ptb < playerY || -ptb > playerY) {
        if (ptb < playerY) {
            playerY = ptb
        } else if (-ptb > playerY) {
            playerY = -ptb
        }
        acceleration = 0
        keysPressed['ArrowUp'] = false;
        keysPressed['ArrowDown'] = false;
        keysPressed['Space'] = false;
    }
    console.log(playerY, ptb, acceleration, timeTransition)
}

function updVs() {
    timeTransition = acceleration / 2
    player.style.transform = `translate(${playerX}px, ${playerY}px)`
    ball.style.transform = `translate(${ballX}px, ${ballY}px)`

}

function ballMove() {
    const ballScreenWidth = ball.offsetLeft;
    const ballScreenHeight = ball.offsetTop;
    directionChance = rand(0, 2);


    if (ballX > (ballScreenWidth)) {
        ballVX = -ballVX;
        if (rand(0, 2) == rand(0, 2)) {
            ballVY = rand(1, 10)
        }
        if (directionChance == rand(0, 2)) {
            ballVY = -ballVY;
        }
    } else if (ballX < (-ballScreenWidth)) {
        ballVX = -ballVX;
        if (rand(0, 2) == rand(0, 2)) {
            ballVY = rand(1, 10)
        }
        if (directionChance == rand(0, 2)) {
            ballVY = -ballVY;

        }
    }

    if (ballY > (ballScreenHeight)) {
        if (rand(0, 2) == rand(0, 2)) {
            ballVX = rand(1, 10)
        }
        if (directionChance == rand(0, 2)) {
            ballVX = -ballVX;
        }
        ballVY = -ballVY;
    } else if (ballY < (-ballScreenHeight)) {
        if (rand(0, 2) == rand(0, 2)) {
            ballVX = rand(1, 10)
        }
        if (directionChance == rand(0, 2)) {
            ballVX = -ballVX;
        }
        ballVY = -ballVY;
    }
    if ((ballY < (-ballScreenHeight - 50)) || (ballX > (ballScreenWidth + 50))||(ballX < (-ballScreenWidth - 50)) || (ballX > (ballScreenWidth + 50))) {
        ballX = 0
        ballY = 0
    }

    checkCollision(player, ball);

    if (collision == 1) {
        if (directionChance == rand(0, 2)) {
            ballVY = -ballVY;

        }
        ballVX = -ballVX
    }

    ballY += ballVY;
    ballX += ballVX;

    console.log(ballScreenWidth, ballScreenHeight, ballX, ballY, ballVX, ballVY, playerY)
}

function checkCollision(rect1, rect2) {
    rect1 = rect1.getBoundingClientRect();
    rect2 = rect2.getBoundingClientRect();
    if (rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y) {
        collision = 1
    } else {
        collision = 0
    }
}

function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
