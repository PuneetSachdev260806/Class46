var bg1, bg2, bg3, bg4, bg5, bgmain;

var r1, r2, r3, r4, r5;

var name;

var trajectory = [];

var gameState = 0;

function preload() {
  bg1 = loadImage("images/bg1.jpg");
  bg2 = loadImage("images/bg2.jpg");
  bg3 = loadImage("images/bg3.jpg");
  bg4 = loadImage("images/bg4.jpg");
  bg5 = loadImage("images/bg5.jpg");
  r1 = loadImage("images/r1.png");
  r2 = loadImage("images/r2.png");
  //r3 = createImg("r3.gif");
  r3 = loadGif("images/r3.gif");
  r4 = loadImage("images/r4.png");
  r5 = loadImage("images/r5.png");
  bgmain = loadImage("images/bgmain.jpg");
  smoke = loadImage("images/smoke.png");
}


function setup() {
  createCanvas(1200,800);
 // button = createButton('START');
 // button.position(700,600);
 r1s = createSprite(200,450);
  r2s = createSprite(400,450);
  //r3s = createSprite(600,450);
  r4s = createSprite(800,450);
  r5s = createSprite(1000,450);

  r1s.addImage(r1);
  r2s.addImage(r2);
  //r3s.addGif(r3);
  r4s.addImage(r4);
  r5s.addImage(r5);

  
}


function draw() {
  if (gameState===0){
  
  background(bgmain); 
  //r3.position(200,180);
  // image(r3, 120, 140);
  textSize(16);
  text("Space Rocketzz!", 570,200);
  // add story here

  

  

  
  if (mousePressedOver(r1s)) {
    gameState = 1;
   // name = "r1s";
    r1s.scale = 0.38;
    r1s.x = 440;
    r1s.y = 235;
    r1s.visible = true;
    r2s.visible = false;
   // r3s.visible = false;
    r4s.visible = false;
    r5s.visible = false;
  }
  if (mousePressedOver(r2s)) {
    gameState = 1;
    name = "r2s";
    r2s.scale = 0.37;
    r2s.x = 440;
    r2s.y = 235;
    r2s.visible = true;
    r1s.visible = false;
   // r3s.visible = false;
    r4s.visible = false;
    r5s.visible = false;
  }
 /* if (mousePressedOver(r3s)) {
    gameState = 1;
    r3s.scale = 0.35;
    r3s.x = 450;
    r3s.y = 150;
    r3s.visible = true;
    r2s.visible = false;
    r1s.visible = false;
    r4s.visible = false;
    r5s.visible = false;
  }*/
  if (mousePressedOver(r4s)) {
    gameState = 1;
    r4s.scale = 0.45;
    r4s.x = 440;
    r4s.y = 235;
    r4s.visible = true;
    r2s.visible = false;
   // r3s.visible = false;
    r1s.visible = false;
    r5s.visible = false;   
  }
  if (mousePressedOver(r5s)) {
    gameState = 1;
    r5s.scale = 0.35;
    r5s.x = 440;
    r5s.y = 235;
    r5s.visible = true;
    r2s.visible = false;
    //r3s.visible = false;
    r4s.visible = false;
    r1s.visible = false;
  }
  //button.mousePressed(()=>{
  // gameState = 1;
   
 // });
}  if (gameState===1){
  //button.hide();
  background(bg1);
  textSize(26);
  stroke("Black");
  text("Press the Arrow Keys To Lift the Rocket",width-500,100);
  if (keyDown(UP_ARROW)&& name === "r2s"){
    r2s.velocityY = r2s.velocityY-0.5;
    r2s.velocityX = 0.235
   console.log(r2s.velocityY);
    //console.log(r2s.y);
   // camera.y = r2s.y;
  

  }
  
  

  if (r2s.velocityY < -3.5){
    background(bg2);
    r2s.depth = bg2.depth+1;
    camera.position.y = r2s.y;
    camera.position.x = displayWidth/2
   
  }
  
  var position = [r2s.x-5, r2s.y+75];
  trajectory.push(position);
  for(var i=0; i<trajectory.length; i++){
    image(smoke,trajectory[i][0],trajectory[i][1]);
  }
}
  
  
  drawSprites();
}
