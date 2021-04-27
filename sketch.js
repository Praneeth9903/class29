
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinObj,paper,ground
var world;
function preload()
{
	
}

function setup() {
	createCanvas(700, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper=new Paper(100,600,50);

ground=new Ground(400,680,800,20);

dustbinObj=new Dustbin(500,520,150,150);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("gray");
  Engine.update(engine);
  paper.display();
  ground.display();
  dustbinObj.display();
 
	
  
  drawSprites();
 
}
function keyPressed(){  
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:600,y:-500});
	}
}



