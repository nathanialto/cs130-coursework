let width=700, height=500, X = width/2-5, Y = height/2-5, objectwidth = 60;
let X1, Y1, X2, Y2, X3, Y3, X4, Y4, X5, Y5, icon, anxiety, skateboard, skunk, dance_mar, canadian_goose;
function preload() {
  icon = loadImage("images/head.PNG");
  anxiety = loadImage('images/anxiety.PNG');
  skateboard = loadImage('images/skateboard.PNG');
  dance_mar = loadImage('images/dance_mar.PNG');
  canadian_goose = loadImage('images/canadian_goose.PNG');
  skunk = loadImage('images/skunk.PNG');

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

  image(icon, X, Y, objectwidth, objectwidth);
  image(anxiety, X1, Y1, objectwidth, objectwidth); 
  image(skateboard, X2, Y2, objectwidth, objectwidth); 
  image(dance_mar, X3, Y3, objectwidth, objectwidth); 
  image(canadian_goose, X4, Y4, objectwidth, objectwidth); 
  image(skunk, X5, Y5, objectwidth, objectwidth); 

  
  if (X==X1 && Y==Y1) {
    console.log("heyoh");
  }
  
}