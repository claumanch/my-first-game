let xSnake = 50;
let ySnake = 50;
let speedSnake = 2;
let direction = { directionX: 1, directionY: 0 };
let actualBall = null;

function setup() {
  createCanvas(800, 800);

}

function draw() {
  background(220);
  if (!actualBall) {
    actualBall = generateRandomBall();
  }
  drawBorder();
  drawAxis();
  updatePlayer();
  drawBall(actualBall);
  drawPlayer(xSnake, ySnake);
}

function updatePlayer() {

  if (xSnake >= 0 && xSnake <= 750) {
    xSnake = xSnake + direction.directionX * speedSnake;
  }
  else if (xSnake > 750) {
    xSnake = 0;
  }
  else if (xSnake < 0) {
    xSnake = 750;
  }

  if (ySnake > 50 && ySnake < 700) {
    ySnake = ySnake + direction.directionY * speedSnake;
  }
}

function drawPlayer(xSnake, ySnake) {
  rect(xSnake, ySnake, 50, 50);

}

function keyPressed() {
  switch (keyCode) {
    case LEFT_ARROW:
      xSnake -= 1;
      direction = {
        directionX: -1,
        directionY: 0
      }
      break;
    case RIGHT_ARROW:
      xSnake += 1;
      direction = {
        directionX: 1,
        directionY: 0
      }
      break;
    case UP_ARROW:
      ySnake -= 1;
      direction = {
        directionX: 0,
        directionY: -1
      }
      break;
    case DOWN_ARROW:
      ySnake += 1;
      direction = {
        directionX: 0,
        directionY: 1
      }

      break;
  }
}


function drawBorder() {
  for (let indexX = 0; indexX < 800; indexX += 50) {
    drawBlock(indexX, 0)
  }
  for (let indexX = 0; indexX < 800; indexX += 50) {
    drawBlock(indexX, 750)
  }
}

function drawBlock(x, y) {
  rect(x, y, 50, 50);
}

function generateRandomBall() {
  return { xBall: getRandomNumber(50, 750), yBall: getRandomNumber(50, 750) }
}

function drawBall(ball) {
  fill(255, 182, 193)
  circle(ball.xBall, ball.yBall, 20);
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * ((max + 1) - min) + min);
}
