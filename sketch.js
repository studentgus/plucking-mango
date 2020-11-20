
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,bob1,bob2,bob3;
var roof,rope1
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	
	bob1 = new Bob(400,550,60);
	bob2 = new Bob(360,550,60);
	bob3 = new Bob(320,550,60);
	bob4 = new Bob(440,550,60);
	bob5 = new Bob(480,550,60);	

	rope1 = new Rope(bob1.body,{x:400,y:320})
	rope2 = new Rope(bob2.body,{x:360,y:320})
	rope3 = new Rope(bob3.body,{x:320,y:320})
	rope4 = new Rope(bob4.body,{x:440,y:320})
	rope5 = new Rope(bob5.body,{x:480,y:320})
	

	ground = new Ground(400,800,800,20);
   	roof = new Ground ( 400,300,400,40);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  ground.display();
  roof.display();
  drawSprites();
 
}



