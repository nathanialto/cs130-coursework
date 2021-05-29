let width=700, height=500, X = width/2-5, Y = height/2-5, objectwidth = 60;
let X1, Y1, X2, Y2, X3, Y3, X4, Y4, X5, Y5, icon, anxiety, skateboard, skunk, dance_mar, canadian_goose;
function preload() {
  icon = loadImage("images/head.png");
  anxiety = loadImage('images/anxiety.png');
  skateboard = loadImage('images/skateboard.png');
  dance_mar = loadImage('images/dance_mar.png');
  canadian_goose = loadImage('images/canadian_goose.png');
  skunk = loadImage('images/skunk.png');

}
function setup() {
  createCanvas(width, height);
  X1 = random(0,width);
  Y1 = random(0, height);
  X2 = random(0,width);
  Y2 = random(0, height);
  X3 = random(0,width);
  Y3 = random(0, height);
  X4 = random(0,width);
  Y4 = random(0, height);
  X5 = random(0,width);
  Y5 = random(0, height);
}

function draw() {
  Y -= 5;
  if (keyIsDown(RIGHT_ARROW) && X <= width-objectwidth/2-5) {
    X += 5;
  } else if (keyIsDown(LEFT_ARROW) && X >= objectwidth/2+5) {
    X -= 5;
  }
  if (Y == -30){
    Y = height+objectwidth/2;
    X1 = random(0,width);
    Y1 = random(0, height);
    X2 = random(0,width);
    Y2 = random(0, height);
    X3 = random(0,width);
    Y3 = random(0, height);
    X4 = random(0,width);
    Y4 = random(0, height);
    X5 = random(0,width);
    Y5 = random(0, height);
  }
  background(220);
  // circle(X,Y,objectwidth);
  // circle(X1, Y1, objectwidth); 
  // circle(X2, Y2, objectwidth); 
  // circle(X3, Y3, objectwidth); 
  // circle(X4, Y4, objectwidth); 
  // circle(X5, Y5, objectwidth); 

  image(icon, X, Y, objectwidth);
  image(anxiety, X1, Y1, objectwidth); 
  image(skateboard, X2, Y2, objectwidth); 
  image(dance_mar, X3, Y3, objectwidth); 
  image(canadian_goose, X4, Y4, objectwidth); 
  image(skunk, X5, Y5, objectwidth); 

  
  if (X==X1 && Y==Y1) {
    console.log("heyoh");
  }
  
}