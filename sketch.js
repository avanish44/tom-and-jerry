var cat,catimg,catwalk;
var mouse,mouseimg,mousetease;
var garnenimg;
function preload() {
    //load the images here
    catimg = loadAnimation("images/cat1.png");
    catwalk = loadAnimation("images/cat2.png","images/cat3.png");
    mousetease = loadAnimation("images/mouse1.png","images/mouse3.png")
    mouseimg = loadAnimation("images/mouse2.png");
    gardenimg = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(910,490);
    cat.addAnimation("catsitting",catimg);
    cat.scale = 0.15;
    
    mouse = createSprite(350,540);
    mouse.addAnimation("jerrystand",mouseimg);
    mouse.scale = 0.15;
  }

function draw() {
  //920,490,460,540

    background(gardenimg);
    //condition here to evalute if tom and jerry collide
   //text(mouseX + ',' + mouseY,mouseX,mouseY);
   
   if(cat.x - mouse.x < (cat.width - mouse.width)/2){
     cat.velocityX = 0;
     cat.changeAnimation("catsitting");
     cat.x = 200
     mouse.changeAnimation("jerrystand");
    

   }
   
   
   
   drawSprites();
}


function keyPressed(){

  // moving and changing animation code here
 if(keyCode === LEFT_ARROW){
   cat.velocityX = -5;
  cat.addAnimation("catrunning",catwalk);
  cat.changeAnimation("catrunning");
  mouse.addAnimation("mouseteasing",mousetease);
  mouse.changeAnimation("mouseteasing");
}

}
