const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreEl = document.getElementById('score');

// Game State
let score = 0;
let frames = 0;
const player = { x: 200, y: 500, size: 4, speed: 4 };
const bullets = [];
const keys = {};

// Input listeners
window.onkeydown = (e) => keys[e.key] = true;
window.onkeyup = (e) => keys[e.key] = false;

// Helper: Create a bullet
function spawnBullet(x, y, angle, speed, color = "red") {
    bullets.push({ x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, color });
}

// Boss Patterns
function bossLogic() {
    // Pattern 1: Spiral
    if (frames % 5 === 0) {
        const angle = frames * 0.1;
        spawnBullet(200, 150, angle, 2, "#ff4444");
        spawnBullet(200, 150, angle + Math.PI, 2, "#4444ff");
    }

    // Pattern 2: Ring bursts
    if (frames % 100 === 0) {
        for (let i = 0; i < 20; i++) {
            spawnBullet(200, 150, (i * Math.PI * 2) / 20, 1.5, "white");
        }
    }
}

function update() {
    frames++;

    // Player Movement (Shift for Focus Mode)
    const currentSpeed = keys['Shift'] ? player.speed / 2 : player.speed;
    if (keys['ArrowUp'] && player.y > 0) player.y -= currentSpeed;
    if (keys['ArrowDown'] && player.y < canvas.height) player.y += currentSpeed;
    if (keys['ArrowLeft'] && player.x > 0) player.x -= currentSpeed;
    if (keys['ArrowRight'] && player.x < canvas.width) player.x += currentSpeed;

    bossLogic();

    // Move Bullets & Check Collision
    for (let i = bullets.length - 1; i >= 0; i--) {
        const b = bullets[i];
        b.x += b.vx;
        b.y += b.vy;

        // Collision Check (Distance formula)
        const dist = Math.hypot(b.x - player.x, b.y - player.y);
        if (dist < player.size + 2) {
            alert("Pichuun! Game Over. Score: " + score);
            document.location.reload();
        }

        // Remove off-screen bullets
        if (b.y > canvas.height || b.y < 0 || b.x > canvas.width || b.x < 0) {
            bullets.splice(i, 1);
            score += 10;
            scoreEl.innerText = score;
        }
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw Player (Hitbox is smaller than the visual character)
    ctx.fillStyle = "cyan";
    ctx.beginPath();
    ctx.arc(player.x, player.y, player.size, 0, Math.PI * 2);
    ctx.fill();

    // Draw Bullets
    bullets.forEach(b => {
        ctx.fillStyle = b.color;
        ctx.beginPath();
        ctx.arc(b.x, b.y, 3, 0, Math.PI * 2);
        ctx.fill();
    });

    // Draw Boss (Placeholder)
    ctx.fillStyle = "purple";
    ctx.fillRect(175, 125, 50, 50);

    requestAnimationFrame(() => {
        update();
        draw();
    });
}

draw();
