const image = document.querySelector("img");
const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

function gameLoop() {
  drawGame();
  
  setTimeout(gameLoop, 1000 / 60);
}

function drawGame() {
  ctx.drawImage(image, 0, 0, 160, 220);
}

function moveGame() {
}


gameLoop();