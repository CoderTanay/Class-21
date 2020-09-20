var Ob21, Ob11;

function setup() {
  createCanvas(1200,800);
  Ob21 = createSprite(400, 100, 50, 80);
  Ob21.shapeColor = "green";
  Ob21.debug = true;
  Ob11 = createSprite(400, 800,80,30);
  Ob11.shapeColor = "green";
  Ob11.debug = true;

  Ob11.velocityY = -5;
  Ob21.velocityY = +5;
}

function draw() {
  background(0,200,175); 
  bounce(Ob11,Ob21);
  
  drawSprites();
}