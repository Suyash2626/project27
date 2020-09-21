
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  roofObject = new Roof(55,200,500,20);

  bobObject1 = new Bob(50,500,20);
  bobObject2 = new Bob(60,500,20);
  bobObject3 = new Bob(70,500,20);
  bobObject4 = new Bob(80,500,20);
  bobObject5 = new Bob(90,500,20);

  rope1=new Rope(bobObject1.body,roofObject.body,bobdiameter*2,0);
  rope2=new Rope(bobObject2.body,roofObject.body,bobdiameter*2,0);
  rope3=new Rope(bobObject3.body,roofObject.body,bobdiameter*2,0);
  rope4=new Rope(bobObject4.body,roofObject.body,bobdiameter*2,0);
  rope5=new Rope(bobObject5.body,roofObject.body,bobdiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  

  drawSprites();
 
}



