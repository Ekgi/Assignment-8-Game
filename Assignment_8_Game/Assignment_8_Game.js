let rectangles = [];
let bgColor = 220; 
let gameOver = false;
let score = 0; 
let speed = 2; 

function setup() {
  createCanvas(500, 800);
}

function draw() {
  background(bgColor);

  if (gameOver) {
    displayGameOver();
    return;
  }
  displayText();
  controlRectangles();
}
function displayText() {
  fill(0);
  textSize(24);
  text("Score: " + score, 10, 30);
  text("Avoid The Falling Blocks", 150,30)
  //textAlign(CENTER,CENTER)


}
function displayGameOver() {
  fill(255); // White text
  textSize(48);
  textAlign(CENTER, CENTER);
  text("Game Over", width / 2, height / 2);
  textSize(24);
  text("Final Score: " + score, width / 2, height / 2 + 50);
}

function controlRectangles() {
  if (frameCount % 30 === 0) { //produces rectangles!
    createRectangles(1); // determines rectangles
  }
  for (let i = rectangles.length - 1; i >= 0; i--) {
    let rectangle = rectangles[i];
    rectangle.y += speed; // moves down

    rect(rectangle.x, rectangle.y, 50, 60);

    if (mouseX > rectangle.x && mouseX < rectangle.x + 50 &&
        mouseY > rectangle.y && mouseY < rectangle.y + 60) {
      endGame();
    }

    if (rectangle.y > height) {
      incrementScore();
      rectangles.splice(i, 1);
    }
  }
}

function createRectangles(count) {
  for (let i = 0; i < count; i++) {
    rectangles.push({ x: random(width - 50), y: 0 }); //rectangles spqwn at top
  }
}

function endGame() {
  gameOver = true; 
  bgColor = color(255, 0, 0); 
}

function incrementScore() {
  score++;
  
  if (score % 10 === 0) { 
    speed += 1.5; 
  }
}
