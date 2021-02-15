var END=0;
var gameState=END;
var title_Image;
var player,player_Image;
var playButton,button_Image;
var bg,background_Image;
var keyPressed;
var black,black_Image;
var ground;
var bodyguard;
var bodyguard_Image;
var ship,ship_Image,shipGroup;
var enemy,enemy_Image,enemyGroup;
var diamond,diamond_Image,diamondGroup;
var score;
var loseImage,lose;
var ending,ending_Image;


function preload(){
title_Image=loadImage("title1.jpg");
player_Image=loadImage("player.png")  ;
button_Image=loadImage("play button.png");
background_Image=loadImage("background 1.png");
black_Image=loadImage("black.jpg");
bodyguard_Image=loadImage("bodyguard.png");
  ship_Image=loadImage("space ship.png");
ghost_Image=loadImage("ghost image.jpg");  
enemy_Image=loadImage("bodyguard.png");  
diamond_Image=loadImage("diamond.png");
loseImage=loadImage("lostImage.png");  
ending_Image=loadImage("ending.jpg");  
}

function setup() {
createCanvas(750,480);

  player=createSprite(30,400,80,40);
  player.addImage(player_Image);
  player.scale=0.1;
  player.visible=false;

  playButton=createSprite(400,380,40,40);
  playButton.addImage(button_Image);
  playButton.scale=0.2;

  bg=createSprite(530,200);
bg.addImage(background_Image) ; 
  bg.velocityX=-2;
  bg.visible=false;
  
   ending=createSprite(530,200);
ending.addImage(ending_Image) ; 
ending.visible=false;  
   ground=createSprite(400,490,800,10);
  bodyguard=createSprite(200,200,10,20);
 bodyguard.visible=false;
  
  shipGroup=createGroup();
  enemyGroup=createGroup();
  diamondGroup=createGroup();
  
  lose=createSprite(170,230,40,10);
  lose.addImage(loseImage);
  lose.visible=false;
  lose.scale=0.2;

score=0;

}

function draw() {
background(title_Image);
keyPressed();
  
if(bg.x<240){
bg.x=bg.width/2;  
}
  

 if(keyDown("LEFT_ARROW")){
  bg=createSprite(500,200);
bg.addImage(background_Image) ; 
  bg.velocityX=-2;
    player=createSprite(30,430,80,40);
  player.addImage(player_Image);
  player.scale=0.120;
 
 ground=createSprite(400,490,800,10);
   
 
 }  
   
 if(shipGroup.isTouching(player)||enemyGroup.isTouching(player)){
    shipGroup.destroyEach();
     player.scale=player.scale-0.060;
    player.velocityY=-1;
  }
  
  if(player.scale===0){
   gameState=END;
   ground.velocityX = 0;
        player.velocityY = 0;
        shipGroup.setVelocityXEach(0);
        enemyGroup.setVelocityXEach(0);
        diamondGroup.setVelocityXEach(0);
   player.visible=false;

     if(gameState===END){
score.visible=false;
    ground.velocityX=0
    shipGroup.destroyEach();
     enemyGroup.destroyEach();
     diamondGroup.destroyEach();
       ground.visible=false
    bg.visible=false;
       score.visible=false;
       background("black");
    textSize(62)
    fill("yellow")
    text("You lose!",200,250)
    lose.visible=true;
    textSize(18);
       fill("yellow");
       
    text("press up_arrow to continue..", 200,450);   
     }  
  }
  if(keyDown("UP_ARROW")){
   ending=createSprite(400,200);
ending.addImage(ending_Image);   
  }
  
       
    
       
 if(keyDown("space") ) {
      player.velocityY = -5;

 }
  
  player.collide(ground);
  
if(player.y < 190){
player.velocityY=5;  

}
   
spawnShips();
spawnEnemy();
spawnDiamond();  
  
drawSprites();
textSize(20);
   fill("orange");
   text("Score: "+score,650,20);
if(diamondGroup.isTouching(player)) {
score=score+1;  
}  



function keyPressed(){
if(keyCode===RIGHT_ARROW){
  playButton.visible=false;
background(black_Image)
  textSize(40)
    fill("yellow")
      text("Welcome to Roboland",170,30)  
   
  textSize(25);
  fill("pink");
  text("-A robot has ran away after being malfunctioned..",10,70);
  text("Now the robot has came in your control but the robot has been lost.",10,110);
text("- Somewhere,near a place where there are too many robots and",10,140);  
  text("space ships and even ghosts.. ",10,170);  
 text("-the robot is now in your control so bring him to your",10,210); 
  text("research centre but be careful your robot has only 2 lives!! ",10,240);  
text("-Press Space to jump",10,290);  
text("-Press Left arrow till the game does not appear",10,340);  
}  
}
}

function spawnShips() {
  //write code here to spawn the clouds
  if (frameCount % 450 === 0) {
    var ship = createSprite(740,120,40,10);
    ship.y = Math.round(random(100,240));
    ship.addImage(ship_Image);
    ship.scale = 0.254;
    ship.velocityX = -15;
    
     //assign lifetime to the variable
    ship.lifetime = 280;
    
        //add each cloud to the group
    shipGroup.add(ship);
    }
 
}

function spawnEnemy() {
  //write code here to spawn the clouds
  if (frameCount % 600 === 0) {
    var enemy = createSprite(750,420,40,10);
    enemy.addImage(enemy_Image);
    enemy.scale = 0.3;
    enemy.velocityX = -14;
    
     //assign lifetime to the variable
    enemy.lifetime = 280;
    
        //add each cloud to the group
    enemyGroup.add(enemy);
    }
 
}

function spawnDiamond() {
  //write code here to spawn the clouds
  if (frameCount % 800 === 0) {
    var diamond = createSprite(740,120,40,10);
    diamond.y = Math.round(random(100,240));
    diamond.addImage(diamond_Image);
    diamond.scale = 0.1;
    diamond.velocityX = -12;
    
     //assign lifetime to the variable
    diamond.lifetime = 280;
    
        //add each cloud to the group
    diamondGroup.add(diamond);
    }
 
}

