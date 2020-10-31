
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,dustbinObj;
var ground;

function preload(){
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  ground = new Ground(600,height,1200,20);
paper = new Paper(100,200,70);
dustbinObj=new dustbin(900,580);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground.display();
  dustbinObj.display();
  paper.display();
 
  drawSprites();
 
}

function keyPressed(){
if(keyCode == UP_ARROW){

Matter.Body.applyForce(paper.body,paper.body.position,{x:250,y:-250});

 }
}

