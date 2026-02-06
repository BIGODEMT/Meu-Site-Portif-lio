const canvas = document.getElementById('starfall-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Star {
    constructor() { this.reset(); }
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * -canvas.height;
        this.speed = Math.random() * 2 + 1; // Mais lento para ser elegante
        this.len = Math.random() * 30 + 10;
    }
    draw() {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)'; // Quase invisível
        ctx.lineWidth = 1;
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.len);
        ctx.stroke();
    }
    update() {
        this.y += this.speed;
        if (this.y > canvas.height) this.reset();
        this.draw();
    }
}

let stars = [];
for(let i=0; i<60; i++) stars.push(new Star());

function animate() {
    ctx.fillStyle = 'rgba(10, 10, 10, 0.2)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    stars.forEach(s => s.update());
    requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

animate();