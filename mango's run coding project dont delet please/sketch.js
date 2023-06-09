var bg, bgImg;

var mango, mangoImg;

var ground;

var log,logimg;
var bug, bugimg;
var treat, treatimg;

var gameState = 0;

var logGroup;
var bugGroup;
var treatGroup;

var lives = 4;
var score = 0;



function preload(){
  bgImg = loadImage("BgImg.webp");
  mangoImg = loadAnimation("dog1.png","dog2.png","dog3.png","dog4.png","dog5.png");

  logimg = loadImage("Log2.png");
  bugimg = loadImage("bug2.png");
  treatimg = loadImage("dogBone.png");


}

function setup(){
  createCanvas(900,550);
  bg = createSprite(0,0,1200,900);
  bg.addImage(bgImg);

  bg.velocityX=-1;

  ground = createSprite(50,500,200,5);
  ground.visible=false;
  

  mango = createSprite(100,400,100,100);
  mango.addAnimation(" mango_running",mangoImg);
  mango.scale=(0.5);

  bugGroup = createGroup();
  logGroup = createGroup();
  treatGroup = createGroup();


}

function draw(){


if(gameState===0){
  spawnLogs();
  spawnBugs();
  spawnTreats();

  
if(bg.x<-55){
  bg.x=width/2;
  }

  
if(keyDown("SPACE")&& mango.y>200){
  mango.velocityY=-5;
}

mango.velocityY=mango.velocityY+0.8;
mango.collide(ground);
mango.debug = true;
mango.setCollider("rectangle",0,0,mango.width,mango.height)
 
if(treatGroup.isTouching(mango)){
  score = score +1;
  treatGroup.destroyEach();
}

if(bugGroup.isTouching(mango)){
  score = score - 1;
  bugGroup.destroyEach();
}


if(logGroup.isTouching(mango)){
  lives = lives - 1;
  logGroup.destroyEach();
}

}

if(gameState===1){

}


drawSprites();

textSize(30);
text("Lives : "+lives,50,50);

text("Score : "+score,50,90);

}

function spawnLogs(){
  if(frameCount%300===0){
    log=createSprite(800,450,100,100);
    log.addImage(logimg);
    log.velocityX=-3;
    log.scale = 0.07;
    log.y=random(400,500);
    logGroup.add(log);
  }

}

function spawnBugs(){
  if(frameCount%500===0){
    bug=createSprite(800,150,100,100);
    bug.addImage(bugimg);
    bug.velocityX=-5;
    bug.scale = 0.07;
    bug.y=random(100,300);
    bugGroup.add(bug);
  }
}
function spawnTreats(){
  if(frameCount%400===0){
    treat=createSprite(800,450,100,100);
    treat.addImage(treatimg);
    treat.velocityX=-5;
    treat.scale = 0.09;
    treat.y=random(400,500);
    treatGroup.add(treat);
  }
  
}

