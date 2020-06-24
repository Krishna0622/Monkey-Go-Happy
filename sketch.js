//Global Variables
var monkey, monkeyimage;
var banana, bananaimage,bananagroup;
var ground, groundimage;
var obstacle, obstacleimage,obstaclegroup;
var backgrounD, backgroundimage;
var restart, restartimage;
var gameover, gameoverimage;
var score=0;
var gameState, PLAY, END;
gameState=PLAY;

function preload(){
 monkeyimage = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png"); 
  
 bananaimage=loadImage("Banana.png");
  
 groundimage=loadImage("ground.jpg");
  
 obstacleimage=loadImage("stone.png");
  
 backgroundimage=loadImage("jungle.jpg");
  
  
}


function setup() {
  createCanvas(600,300);
  
  backgrounD = createSprite(300,150,600,300);
  backgrounD.addImage("junglesprite",backgroundimage);
  backgrounD.scale=0.7;
  
  monkey = createSprite(50,270,20,50);
  monkey.addAnimation("monkeysprite",monkeyimage);
  monkey.scale=0.1;
  
  ground = createSprite(300,393,600,50);
  ground.addImage("groundimage",groundimage);
  ground.scale=0.17;
  
  bananagroup=new Group();
  
  obstaclegroup = new Group();
  
  
}


function draw(){
  background(255); 
  console.log(monkey.y);
  ground.debug=true;
  if(gameState===PLAY){
    if(keyDown("space")&&monkey.y>267){
      monkey.velocityY=-13;
    }
  monkey.velocityY=monkey.velocityY+0.7;
  monkey.collide(ground);
  obstaclespawn();
  bananadrop(); 
  if(obstaclegroup.isTouching(monkey)){
   monkey.scale=0.1; 
   obstaclegroup.destroyEach(); 
  }
  if(bananagroup.isTouching(monkey)){
    monkey.scale=monkey.scale+0.05
    bananagroup.destroyEach();
    score=score+2;
  }
  }
 drawSprites(); 
 text("score "+score,550,50); 
}

function obstaclespawn(){
  if(frameCount % 80===0){
    obstacle = createSprite(600,270,30,30);
    obstacle.addImage("stone",obstacleimage);
    obstacle.scale=0.15;
    obstacle.velocityX=-4;
    obstacle.lifetime=175;
    obstaclegroup.add(obstacle);
  }
}  
function bananadrop(){
  if(frameCount % 100===0){
    banana = createSprite(600,random(120,200),20,20);
    banana.addImage("bananasprite",bananaimage);
    banana.scale=0.05;
    banana.velocityX=-4;
    banana.lifetime=200;
    bananagroup.add(banana);
  }  
}
