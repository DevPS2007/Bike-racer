var edges
var mop1,mop2,mop3;
var mop4,mop5,mop6;
var op1,op2,op3;
var path,M;
var pathImg,mainRacerImg1,mainRacerImg2;
var END =0;
var PLAY =1;
var gameState = PLAY;
var distance=0;
var mg;
function preload(){
  pathImg = loadImage("images/Road.png");
 mop1=loadAnimation("images/opponent1.png","images/opponent2.png");
  mop2=loadAnimation("images/opponent3.png");
  mop4=loadAnimation("images/opponent4.png","images/opponent5.png");
  mop5=loadAnimation("images/opponent6.png");
  mainRacerImg1 = loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
  mainRacerImg2= loadAnimation("images/mainPlayer3.png"); 
 op1=loadAnimation("images/opponent7.png","images/oppo8.png");
 //op1=loadAnimation("images/opponent7.png","images/opponent8.png");
 op2=loadAnimation("images/opponent9.png"); 
}
function setup(){
createCanvas(1000,450);
// Moving background
path=createSprite(500,150);
path.addImage(pathImg);
path.velocityX = -5;

//creating boy running

M= createSprite(70,150,20,20);
M.addAnimation("SahilRunning",mainRacerImg1);
M.scale=0.07;
  mg= new Group();
}
function draw() {
  background("red");
  drawSprites();
  textSize(20);
  fill(255);
  text("Distance: "+ distance,350,30);
  if(gameState===PLAY){  
   M.y = World.mouseY;
   edges= createEdgeSprites();
   M.collide(edges);
  
  //code to reset the background
  if(path.x < 0 ){
    path.x = width/2;
  }
  path.velocityX = -(4 + distance/100)
  distance=distance+ Math.round(getFrameRate()/60);
   M.debug = false; 
    M.setCollider("circle",0,0,600);
  o1();
 
    if(M.isTouching(mg)){
      gameState=END;
      M.changeAnimation("SahilRunning",mainRacerImg2);
    }
    }
  if(gameState==END){
    path.velocityX=0;
    mg.setVelocityXEach(0);
    var mop=Math.round(random(1,3));
  if(mop==1){
    mop3.changeAnimation("crash1",mop2);
  }
    if(mop==2){
    mop3.changeAnimation("crash2",mop5);
  }
    if(mop==3){
      mop3.changeAnimation("crash3",op2);
  }
  }
  }
function o1(){
  if(frameCount%100==0){
  var mop3=createSprite(1000,random(0,400),10,10);
  mop3.velocityX=-3;
  mop3.scale=0.07;
 mop3.debug = false; 
    mop3.setCollider("circle",0,0,600);
  var mop=Math.round(random(1,3));
  if(mop==1){
    mop3.addAnimation("opponent1",mop1);
  }
    if(mop==2){
    mop3.addAnimation("opponent2",mop4);
  }
    if(mop==3){
     mop3.addAnimation("oppo3",op1);
  }
  mg.add(mop3);
  }
}