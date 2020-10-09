//to define objects
var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);

  // to create fixedrect
  fixedRect = createSprite(600, 200, 50, 80);
  fixedRect.shapeColor = "aqua";
  fixedRect.debug = false;

  //to create movingrect
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "aqua";
  movingRect.debug = false;

  //to give velocity to objects
  fixedRect.velocityX=-5;
  movingRect.velocityX=5;
}

function draw() {

  //to colour background
  background(0,0,0);  

  //to test is touching function
if(isTouching(movingRect,fixedRect)){
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
}

else {
  movingRect.shapeColor="aqua";
  fixedRect.shapeColor="aqua";
}
 
  // to test bounceOff function
  bounceOff(movingRect,fixedRect);
   
  //to draw sprites
  drawSprites();
}
