const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let mouse = { x: null, y: null };

window.addEventListener("mousemove", (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
});

let particlesArray = [];

// PARTICLE
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }

    draw() {
        ctx.fillStyle = "rgba(0,255,255,0.9)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// INIT
function init() {
    particlesArray = [];
    for (let i = 0; i < 180; i++) { // MORE PARTICLES
        particlesArray.push(new Particle());
    }
}

// CONNECT LINES
function connect() {
    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
           let dx = particlesArray[a].x - mouse.x;
let dy = particlesArray[a].y - mouse.y;
let dist = dx * dx + dy * dy;

if (dist < 15000) {
    ctx.strokeStyle = "rgba(255,255,255,0.3)";
    ctx.beginPath();
    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke();
}
        }
    }
}

// ANIMATE
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesArray.forEach(p => {
        p.update();
        p.draw();
    });

    connect(); // 🔥 ADD CONNECTIONS

    requestAnimationFrame(animate);
}

// RESIZE
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});

init();
animate();
