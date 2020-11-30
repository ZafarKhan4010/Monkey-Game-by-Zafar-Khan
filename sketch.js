//gamestates
var PLAY=1;
var END=0;
var gamestates;

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var survivalTime=0;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  //creating monkey
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  
  //create ground
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
 
  
  
  //add group
  bananaGroup=new Group();
  obstacleGroup=new Group();
  
}


function draw() {
  background("pink");
 
 
   
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score:"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time:"+survivalTime,100,50);
 
 if(gamestates===PLAY){
    
 }
  
  if(ground.x<0){
    ground.x=ground.width/2;
  } 
  
  if(keyDown("space") ){
    monkey.velocityY=-12;
    monkey.velocityY=monkey.velocityY+0.8;
    
  }
 
  monkey.velocityY=monkey.velocityY+0.8; 
  monkey.collide(ground);
 
  //add gravity
  monkey.velocityY=monkey.velocityY-0.3;
  
  

  if(obstacleGroup.isTouching(monkey)){
    obstacleGroup.destroyEach();
    bananaGroup.destroyEach();
    text("game Over",200,200);
    gameState=END;
  } 
  
  
  spawnBanana();
  
 drawSprites();
  
}

function reset(){

  gameState=END;
  gameOver.visible=false;
  restart.visible=false;

  
 
  
  obstacleGroup.destroyEach(); 
  bananaGroup.destroyEach(); 
  
  
  
}


function spawnBanana(){
  
  
  //create Banana Sprite
  if (frameCount%80===0){
  banana=createSprite(120,200,20,20);
  banana.addImage(bananaImage);
  banana.y = Math.round(random(10,60));
  banana.scale=0.1;   
  banana.velocityX=-2;
  banana.y=90;  
  banana.lifetime = 134;   
    
  bananaGroup.add(banana); 
      
  } 

   //createObstacles
 if(frameCount%180===0)
 {obstacle=createSprite(300,325,50,50);  
  obstacle.addImage(obstacleImage); 
  obstacle.scale=0.1; 
  obstacle.velocityX=-2;
  obstacle.lifetime = 134; 
 
  obstacleGroup.add(obstacle);
  
 }
  
}
