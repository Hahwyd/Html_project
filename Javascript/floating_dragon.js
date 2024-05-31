const dragonCount = 35;
const dragons = [];
const container = document.getElementById('dragons');
const speed = 2; // Установленная скорость для всех дракончиков

for (let i = 0; i < dragonCount; i++) {
    const dragon = document.createElement('div');
    dragon.classList.add('dragon');
    dragon.style.left = `${(window.innerWidth / 2) - 50}px`;
    dragon.style.top = `${(window.innerHeight / 2) - 50}px`;
    dragon.dataset.dx = (Math.random() * 2 - 1) * speed;
    dragon.dataset.dy = (Math.random() * 2 - 1) * speed;
    container.appendChild(dragon);
    dragons.push(dragon);
}

function animateDragons() {
    dragons.forEach(dragon => {
        let x = parseFloat(dragon.style.left);
        let y = parseFloat(dragon.style.top);
        let dx = parseFloat(dragon.dataset.dx);
        let dy = parseFloat(dragon.dataset.dy);

        if (x + dx > window.innerWidth - 100 || x + dx < 0) {
            dx = -dx;
        }

        if (y + dy > window.innerHeight - 100 || y + dy < 0) {
            dy = -dy;
        }

        dragon.style.left = `${x + dx}px`;
        dragon.style.top = `${y + dy}px`;
        dragon.dataset.dx = dx;
        dragon.dataset.dy = dy;
    });

    requestAnimationFrame(animateDragons);
}

animateDragons();
