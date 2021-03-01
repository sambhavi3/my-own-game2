
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var signal, virus, sanitizer, mask;
var backGr;

function preload()
{
	
}

function setup() {
	createCanvas(windoWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(cyan);
  
  drawSprites();
 
}



