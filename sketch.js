var bgImg;
var cat;
var mouse;

function preload() {
   bjImg = loadImage("images/garden.png");
   cat1 = loadAnimation("images/cat1.png");
   cat2 = loadAnimation("images/cat2.png","images/cat3.png");
   cat3 = loadAnimation("images/cat4.png");
   mouse1 = loadAnimation("images/mouse1.png");
   mouse2 = loadAnimation("images/mouse2.png","images/mouse3.png");
   mouse3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    
    cat = createSprite(870,600,10,10);
    cat.addAnimation("tomSleeping",cat1);
    cat.scale = 0.2;

    mouse = createSprite(200,600,10,10);
    mouse.addAnimation("jerryStanding",mouse1);
    mouse.scale = 0.15;
}

function draw() {
    background(bjImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x-mouse.x<cat.width/2+mouse.width/2) {
      cat.velocityX = 0;
      cat.addAnimation("tomSitting",cat3);
      //cat.x = 300;
      cat.scale = 0.2;
      cat.debug = true;
      cat.setCollider("circle",0,0,300);
      cat.changeAnimation("tomSitting",cat3);
      mouse.addAnimation("jerry",mouse3);
      mouse.scale = 0.15;
      mouse.debug = true;
      mouse.setCollider("circle",0,0,300);
      mouse.changeAnimation("jerry",mouse3);
    }

    drawSprites();
}


function keyPressed(){
  if(keyCode === LEFT_ARROW) {
    cat.velocityX = -5;
    cat.addAnimation("tomRunning",cat2);
    cat.changeAnimation("tomRunning",cat2);
    mouse.addAnimation("jerryTeasing",mouse2);
    mouse.frameDelay = 25;
    mouse.changeAnimation("jerryTeasing",mouse2);
  }
}
