let width=900, height=500, X = width/2-60, Y = height/2-60, objectwidth = 120;
let X1, Y1, X2, Y2, X3, Y3, X4, Y4, X5, Y5, icon, anxiety, skateboard, skunk, dance_mar, canadian_goose;
let arrow=true;
function preload() {
  icon = loadImage("https://i.ibb.co/fQngxF6/head.png");
  anxiety = loadImage('https://i.ibb.co/jH0kzhc/anxiety.png');
  skateboard = loadImage('https://i.ibb.co/5h85pCN/skateboard.png');
  dance_mar = loadImage('https://i.ibb.co/0Zhj8WR/dance-mar.png');
  canadian_goose = loadImage('https://i.ibb.co/VHzt0cq/canadian-goose.png');
  skunk = loadImage('https://i.ibb.co/5Gw1xtB/skunk.png');


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

  if (keyIsDown(RIGHT_ARROW) && X <= width-objectwidth-5) {
    X += 5;
  } else if (keyIsDown(LEFT_ARROW) && X >= -5) {
    X -= 5;
  }
  if (Y == -120){
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
  
  background(75);
  noStroke();
  fill(255);
  rect(40, 0, 35, height);
  rect(width-80, 0, 35, height);
  rect(40, 0, width-90, 35);
  rect(40, 80, width-90, 35);
  rect(40, 160, width-90, 35);
  rect(40, 240, width-90, 35);
  rect(40, 320, width-90, 35);
  rect(40, 400, width-90, 35);
  rect(40, 480, width-90, 35);
  fill(138, 165, 255);
  textSize(16);
  text('Use left and right arrow keys to play', 330, 460);
  

  image(icon, X, Y, objectwidth, objectwidth);
  image(anxiety, X1, Y1, objectwidth, objectwidth); 
  image(skateboard, X2, Y2, objectwidth, objectwidth); 
  image(dance_mar, X3, Y3, objectwidth, objectwidth); 
  image(canadian_goose, X4, Y4, objectwidth, objectwidth); 
  image(skunk, X5, Y5, objectwidth, objectwidth); 
  
  // set center points
  Xc = X + objectwidth/2;
  Yc = Y + objectwidth/2;
  X1c = X1 + objectwidth/2;
  Y1c = Y1 + objectwidth/2;
  X2c = X2 + objectwidth/2;
  Y2c = Y2 + objectwidth/2;
  X3c = X3 + objectwidth/2;
  Y3c = Y3 + objectwidth/2;
  X4c = X4 + objectwidth/2;
  Y4c = Y4 + objectwidth/2;
  X5c = X5 + objectwidth/2;
  Y5c = Y5 + objectwidth/2;

  
  if (Xc>=(X1c-objectwidth/2) && Xc<=(X1c+objectwidth/2) && Yc>=(Y1c-objectwidth/2) && Yc<=(Y1c+objectwidth/2)) {
    location.href = 'anxiety.html';
  }
  if (Xc>=(X2c-objectwidth/2) && Xc<=(X2c+objectwidth/2) && Yc>=(Y2c-objectwidth/2) && Yc<=(Y2c+objectwidth/2)) {
    location.href = 'skateboard.html';
  }
  if (Xc>=(X3c-objectwidth/2) && Xc<=(X3c+objectwidth/2) && Yc>=(Y3c-objectwidth/2) && Yc<=(Y3c+objectwidth/2)) {
    location.href = 'dance_mar.html';
  }
  if (Xc>=(X4c-objectwidth/2) && Xc<=(X4c+objectwidth/2) && Yc>=(Y4c-objectwidth/2) && Yc<=(Y4c+objectwidth/2)) {
    location.href = 'canadian_goose.html';
  }
  if (Xc>=(X5c-objectwidth/2) && Xc<=(X5c+objectwidth/2) && Yc>=(Y5c-objectwidth/2) && Yc<=(Y5c+objectwidth/2)) {
    location.href = 'skunk.html';
  }
}

function toggleVisibility() {
  if (!lost){
    location.href = 'lost.html'

  }
  else{
  if (!playing){
    location.href = 'main.html'
  }
  else{
  var x = document.getElementById('hidden');
  var y = document.getElementById('visible');
  var w = document.getElementById('no_run');

      x.style.display = "block";
      y.style.display = "none";
      w.style.display = "none";
  }}
}

function goback() {
  location.href = 'main.html'
}

var enemy_health = 20;
var my_health = 20;

var playing = true;
var your_turn = true;
var lost = true;

function battle_a(){
  if (my_health == 0){
    var v = document.getElementById('lose');
    var x = document.getElementById('hidden');
      v.style.display = "block";
      x.style.display = "none";
      playing = !playing; 
      lost = !lost;
    }

    let damage = Math.random()*10;
    if (damage <= 3) {
      enemy_health -= 0;
    }
    else if (damage <= 6){
      if (enemy_health >= 1){
      enemy_health -= 1;}
      else{
        enemy_health == 0;
      }
    }
    else if (damage <= 10){
      if (enemy_health >= 3){
      enemy_health -= 3;}
      else{
        enemy_health == 0;
      }
    }
    document.getElementById("enemy_hp").innerHTML = `${enemy_health} health`;
    if (enemy_health == 0){
      var v = document.getElementById('win');
      var x = document.getElementById('hidden');
        v.style.display = "block";
        x.style.display = "none";
        playing = !playing;
    }
    
  battle_e();
  }

function battle_b(){
  if (my_health == 0){
    var v = document.getElementById('lose');
    var x = document.getElementById('hidden');
      v.style.display = "block";
      x.style.display = "none";
      playing = !playing;
      lost = !lost;
    }

  let damage = Math.random()*10;
  if (damage <= 3) {
    enemy_health -= 0;
  }
  else if (damage <= 6){
    if (enemy_health >= 2){
      enemy_health -= 2;}
      else{
        enemy_health == 0;
      }
  }
  else if (damage <= 10){
    if (enemy_health >= 4){
      enemy_health -= 4;}
      else{
        enemy_health == 0;
      }
  }
  document.getElementById("enemy_hp").innerHTML = `${enemy_health} health`;
  if (enemy_health == 0){
    var v = document.getElementById('win');
    var x = document.getElementById('hidden');
      v.style.display = "block";
      x.style.display = "none";
      playing = !playing;
}
battle_e();
}

function battle_c(){
  if (my_health == 0){
    var v = document.getElementById('lose');
    var x = document.getElementById('hidden');
      v.style.display = "block";
      x.style.display = "none";
      playing = !playing;
      lost = !lost;
    }
      

  let damage = Math.random()*10;
  if (damage <= 3) {
    enemy_health -= 0;
  }
  else if (damage <= 6){
    if (enemy_health >= 3){
      enemy_health -= 3;}
      else{
        enemy_health == 0;
      }
  }
  else if (damage <= 10){
    if (enemy_health >= 5){
      enemy_health -= 5;}
      else{
        enemy_health == 0;
      }
  }
  document.getElementById("enemy_hp").innerHTML = `${enemy_health} health`;
  if (enemy_health == 0){
    var v = document.getElementById('win');
    var x = document.getElementById('hidden');
      v.style.display = "block";
      x.style.display = "none";
      playing = !playing;
}
battle_e();
}

function battle_d(){
  if (my_health == 0){
    var v = document.getElementById('lose');
    var x = document.getElementById('hidden');
      v.style.display = "block";
      x.style.display = "none";
      playing = !playing;
      lost = !lost;
    }

  let damage = Math.random()*10;
  var x = document.getElementById('hidden');
  var y = document.getElementById('visible');
      x.style.display = "none";
      y.style.display = "none";
  if (damage <= 5){
    playing = !playing;
    var z = document.getElementById('run');
    z.style.display = "block";
    
  }
  else if (damage > 5){
    var w = document.getElementById('no_run');
    w.style.display = "block";
    battle_e();

  }

}


function battle_e(){

  console.log("hey");
  let damage = Math.random()*10;
  if (damage <= 3) {
    my_health -= 0;
  }
  else if (damage <= 6){
    if (my_health >= 1){
    my_health -= 1;}
    else{
      my_health == 0;
    }
  }
  else if (damage <= 10){
    if (my_health >= 3){
    my_health -= 3;}
    else{
      my_health == 0;
    }
  }

  document.getElementById("my_hp").innerHTML = `${my_health} health`;
  if (enemy_health == 0){
    var v = document.getElementById('win');
    var x = document.getElementById('hidden');
      v.style.display = "block";
      x.style.display = "none";
  }
  your_turn = !your_turn;
}

document.onkeydown = toggleVisibility;
