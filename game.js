background(255, 255, 255);
let x = 100;
let y = 100;
let gameState = "start";
let direction = "forward";
let gameActive = true;
let manY = 0;
//for left gator jaw
let gatorLeftRotation = 320;
let gatorLeftRotationSpeed = 0.5;
let minAngle = 320; // Minimum rotation angle (degrees)
let maxAngle = 360; // Maximum rotation angle (degrees)
//for right gator jaw
let gatorRightRotation = -330;
let gatorRightRotationSpeed = 0;
let minAngle2 = -480;
let maxAngle2 = -370;
//for character movement
let yVelocity = 0.1; // Character's vertical velocity
let gravity = 0.5; // Gravity strength
let jumpStrength = -0.8; // Initial jumping force
let groundLevel = 700; // Ground position
let jumpBoost = -5;
//croc translation
let sizeX = 15;
let sizeY = 25;
let s = 1;
//swamp dimentions
let swampX = 760;
let swampY = 900;
//swampWater dimentions
let waterX = 750;
let waterY = 250;
//Start Image dimentions
let startX = 700;
let startY = 680;
//Win Image Dimentions
let winX = 500;
let winY = 600;
//Loose Image Dimentions
let lostX = 500;
let lostY = 600;

function setup() {
  createCanvas(750, 900);
}

//Shown to me by my friend, Armando Rossmann
//Images used in the game
function preload() {
  crocLeft = loadImage("croc2.png");
  crocRight = loadImage("croc1.png");
  swamp = loadImage("swamp.png");
  swampWater = loadImage("swampwater.png");
  startImage = loadImage("start text.png");
  lostImage = loadImage("looseImage.png");
  wonImage = loadImage("winImage.png");
}

//start screen images function
function startText(x, y, startX, startY) {
  image(startImage, x, y, startX, startY);
}

//background
function backgroundEffects(x, y, swampX, swampY) {
  image(swamp, x, y, swampX, swampY);
}

//loose screen images function
function lostText(x, y, lostX, lostY) {
  image(lostImage, x, y, lostX, lostY);
}

//win screen images function
function winText(x, y, winX, winY) {
  image(wonImage, x, y, winX, winY);
}

//alligator jaws rotation
function agatorLeft(x, y, s) {
  push();
  translate(x + 250, y + 480);
  rotate(radians(gatorLeftRotation));
  image(
    crocLeft,
    0 - (sizeX * s) / 2,
    0 - (sizeY * s) / 2,
    sizeX * s,
    sizeY * s
  );
  gatorLeftRotation += gatorLeftRotationSpeed;

  if (gatorLeftRotation > maxAngle || gatorLeftRotation < minAngle) {
    gatorLeftRotationSpeed = 0.5;
  } else if (gatorLeftRotation === maxAngle) {
    gatorLeftRotationSpeed = 0;
  }
  pop();
}

function agatorRight(x, y, s) {
  push();
  translate(x + 280, y + 480);
  rotate(radians(gatorRightRotation));
  image(
    crocRight,
    0 - (sizeX * s) / 2,
    0 - (sizeY * s) / 2,
    sizeX * s,
    sizeY * s
  );
  gatorRightRotation += gatorRightRotationSpeed;

  if (gatorRightRotation > maxAngle2 || gatorRightRotation < minAngle2) {
    gatorRightRotationSpeed = -0.5;
  } else if (gatorRightRotation === maxAngle2) {
    gatorRightRotationSpeed = 0;
  }
  pop();
}

//swamp imagers on top of alligator function
function frontWater(x, y, waterX, waterY) {
  image(swampWater, x, y, waterX, waterY);
}

//Steve the Florida man
function character(x, y) {
  //face
  fill(200, 173, 127);
  rect(x + 303, y + 228, 15, 15, 0, 0, 10, 10);
  ellipse(x + 310, y + 205, 40, 50);

  //hair
  fill(0, 0, 0);
  circle(x + 290, y + 209, 7);
  circle(x + 291, y + 203, 10);
  circle(x + 289, y + 195, 15);
  circle(x + 295, y + 188, 15);
  circle(x + 300, y + 182, 15);
  circle(x + 305, y + 180, 15);
  circle(x + 313, y + 177, 15);
  circle(x + 320, y + 180, 15);
  circle(x + 328, y + 186, 15);
  circle(x + 334, y + 195, 15);
  circle(x + 332, y + 203, 10);
  circle(x + 331, y + 209, 7);

  //rope
  push();
  strokeWeight(5);
  line(x + 313, y - 700, x + 313, y + 100);
  pop();

  //hands
  fill(200, 173, 127);
  beginShape();
  vertex(x + 350, y + 115);
  line(x + 350, y + 115, x + 330, y + 85);
  vertex(x + 330, y + 85);
  line(x + 330, y + 85, x + 325, y + 70);
  vertex(x + 325, y + 70);
  line(x + 325, y + 70, x + 310, y + 70);
  vertex(x + 310, y + 70);
  line(x + 310, y + 70, x + 310, y + 85);
  vertex(x + 310, y + 85);
  line(x + 310, y + 85, x + 315, y + 85);
  vertex(x + 315, y + 85);
  line(x + 315, y + 85, x + 336, y + 115);
  vertex(x + 336, y + 115);
  line(x + 336, y + 115, x + 350, y + 115);
  endShape(CLOSE);
  beginShape();
  vertex(x + 275, y + 115);
  line(x + 275, y + 115, x + 300, y + 85);
  vertex(x + 300, y + 85);
  line(x + 300, y + 85, x + 304, y + 70);
  vertex(x + 304, y + 70);
  line(x + 304, y + 70, x + 320, y + 70);
  vertex(x + 320, y + 70);
  line(x + 320, y + 70, x + 320, y + 85);
  vertex(x + 320, y + 85);
  line(x + 320, y + 85, x + 310, y + 85);
  vertex(x + 310, y + 85);
  line(x + 310, y + 85, x + 290, y + 115);
  vertex(x + 290, y + 115);
  line(x + 290, y + 115, x + 275, y + 115);
  endShape(CLOSE);

  //pants
  fill(45, 90, 122);
  beginShape();
  vertex(x + 285, y + 340);
  line(x + 285, y + 340, x + 265, y + 430);
  vertex(x + 265, y + 430);
  line(x + 265, y + 430, x + 290, y + 515);
  vertex(x + 290, y + 515);
  line(x + 290, y + 515, x + 314, y + 507);
  vertex(x + 314, y + 507);
  line(x + 314, y + 507, x + 290, y + 430);
  vertex(x + 290, y + 430);
  line(x + 290, y + 430, x + 313, y + 375);
  vertex(x + 313, y + 375);
  line(x + 313, y + 375, x + 336, y + 430);
  vertex(x + 336, y + 430);
  line(x + 336, y + 430, x + 325, y + 507);
  vertex(x + 325, y + 507);
  line(x + 325, y + 507, x + 349, y + 515);
  vertex(x + 349, y + 515);
  line(x + 349, y + 515, x + 360, y + 430);
  vertex(x + 360, y + 430);
  line(x + 360, y + 430, x + 342, y + 340);
  vertex(x + 342, y + 340);
  line(x + 342, y + 340, x + 285, y + 340);
  endShape(CLOSE);

  //shirt
  fill(117, 129, 50);
  beginShape();
  vertex(x + 304, y + 236);
  line(x + 304, y + 236, x + 290, y + 340);
  vertex(x + 290, y + 240);
  bezierVertex(x + 290, y + 240, x + 250, y + 195, x + 295, y + 110);
  vertex(x + 295, y + 110);
  line(x + 295, y + 110, x + 280, y + 106);
  vertex(x + 280, y + 106);
  bezierVertex(x + 280, y + 106, x + 215, y + 175, x + 285, y + 280);
  vertex(x + 285, y + 280);
  bezierVertex(x + 285, y + 280, x + 288, y + 310, x + 280, y + 350);
  vertex(x + 280, y + 350);
  bezierVertex(x + 280, y + 350, x + 313, y + 343, x + 346, y + 350);
  vertex(x + 346, y + 350);
  bezierVertex(x + 346, y + 350, x + 338, y + 310, x + 341, y + 280);
  vertex(x + 341, y + 280);
  bezierVertex(x + 341, y + 280, x + 411, y + 175, x + 346, y + 106);
  vertex(x + 346, y + 106);
  line(x + 346, y + 106, x + 331, y + 110);
  vertex(x + 331, y + 110);
  bezierVertex(x + 331, y + 110, x + 376, y + 195, x + 333, y + 240);
  vertex(x + 333, y + 240);
  line(x + 333, y + 240, x + 318, y + 236);
  vertex(x + 318, y + 236);
  bezierVertex(x + 318, y + 236, x + 311, y + 243, x + 304, y + 236);
  endShape(CLOSE);
}

function gatorLeft(x, y) {
  fill(143, 127, 92);
  beginShape();
  vertex(x + 230, y + 550);
  line(x + 230, y + 550, x + 110, y + 470);
  vertex(x + 110, y + 470);
  line(x + 110, y + 470, x + 125, y + 450);
  vertex(x + 125, y + 450);
  line(x + 125, y + 450, x + 275, y + 550);
  vertex(x + 287, y + 550);
  line(x + 287, y + 550, x + 230, y + 550);
  endShape(CLOSE);
}

function gatorRight(x, y) {
  fill(143, 127, 92);
  beginShape();
  vertex(x + 287, y + 550);
  line(x + 287, y + 550, x + 450, y + 450);
  vertex(x + 450, y + 450);
  line(x + 450, y + 450, x + 465, y + 470);
  vertex(x + 465, y + 470);
  line(x + 465, y + 470, x + 345, y + 550);
  vertex(x + 345, y + 550);
  line(x + 345, y + 550, x + 300, y + 550);
  endShape(CLOSE);
}

//assisted by teacher in lab
function keyPressed() {
  if (keyCode === 32) {
    // Add to velocity every time spacebar is pressed
    yVelocity += jumpBoost; // Apply an additional boost to the current velocity
  }
}

function draw() {
  //GAMESTATES
  if (gameState === "start") {
    backgroundEffects(x - 100, 0, swampX, swampY);
    startText(x - 60, 70, startX, startY);
  } else if (gameState === "game") {
    backgroundEffects(x - 100, 0, swampX, swampY);

    push();
    scale(0.6, 0.6);
    character(300, manY);
    pop();

    //gator left jaw
    push();
    agatorLeft(90, 90, 13);
    pop();

    //gator right jaw
    push();
    agatorRight(125, 90, 13);
    pop();

    //Front Water
    push();
    frontWater(x - 99, 537, waterX, waterY);
    pop();

    if (gameActive) {
      manY = manY + yVelocity;
      yVelocity = yVelocity + gravity;
      if (manY > groundLevel && yVelocity > 3) {
        gameActive = false;
        gameState = "lost";
      } else if (manY > groundLevel && yVelocity <= 3) {
        gameActive = false;
        gameState = "won";
      }
    }
  } else if (gameState === "won") {
    backgroundEffects(x - 100, 0, swampX, swampY);
    push();
    image(wonImage, x + 30, 50, winX, winY);
    frontWater(x - 99, 537, waterX, waterY);
  } else if (gameState === "lost") {
    backgroundEffects(x - 100, 0, swampX, swampY);
    lostText(x + 30, 50, lostX, lostY);
    frontWater(x - 99, 537, waterX, waterY);
  }
}

//inspred by Garrit's "Switching through different states" example video
//Switching between states and reset
function mousePressed() {
  if (gameState === "start") {
    gameState = "game";
    gameActive = true;
    manY = 0;
    gatorLeftRotation = 320;
    gatorLeftRotationSpeed = 0.5;
    minAngle = 320;
    maxAngle = 360;
    //for right gator jaw
    gatorRightRotation = -330;
    gatorRightRotationSpeed = 0;
    minAngle2 = -480;
    maxAngle2 = -370;
    //for character movement
    yVelocity = 0.1; // Character's vertical velocity
    gravity = 0.5; // Gravity strength
    jumpStrength = -0.8; // Initial jumping force
    groundLevel = 700; // Ground position
    jumpBoost = -5;
  } else if (gameState === "lost") {
    gameState = "start";
  } else if (gameState === "won") {
    gameState = "start";
  }
}

