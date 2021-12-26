var bg, arrow, bow, person, platform;
var bgImg, arrowImg, bowImg, personImg, platformImg;

function preload(){
  bgImg = loadImage("background.jpg")
  arrowImg = loadImage("arrow.png")
  bowImg = loadImage("bow.png")
  personImg = loadImage("person.png")
  platformImg = loadImage("platform.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = createSprite(windowWidth/2, windowHeight/2, windowWidth, windowHeight)
  bg.addImage(bgImg)
  bg.scale = 1.5;
  platform = createSprite(200, windowHeight/2, 60, 25)
  platform.addImage(platformImg)
  platform.scale = 0.4;
  person = createSprite(200, windowHeight/2-150, 10, 25)
  person.addImage(personImg)
  person.scale = 0.4;
  bow = createSprite(280, windowHeight/2-150, 10, 15)
  bow.addImage(bowImg)
  bow.scale = 0.1;
  
}

function draw() {
  background(220);
  drawSprites();
}