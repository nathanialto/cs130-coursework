let X = 100, Y = 100;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (keyIsDown(UP_ARROW)) {
    Y -= 5;
  } else if (keyIsDown(DOWN_ARROW)) {
    Y += 5;
  } else if (keyIsDown(RIGHT_ARROW)) {
    X += 5;
  } else if (keyIsDown(LEFT_ARROW)) {
    X -= 5;
  }
  
  background(220);
  circle(X,Y,60);
  
}