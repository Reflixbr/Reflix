const snowflakes = document.createElement('div');
snowflakes.classList.add('snowflakes');
document.body.appendChild(snowflakes);
for (let i = 0; i < 50; i++) {
  const flake = document.createElement('div');
  flake.classList.add('flake');
  flake.style.left = Math.random() * 100 + 'vw';
  flake.style.animationDuration = (Math.random() * 3 + 2) + 's';
  flake.style.opacity = Math.random();
  snowflakes.appendChild(flake);
}
