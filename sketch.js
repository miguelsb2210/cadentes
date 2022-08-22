
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
circulo=Bodies.circle(400,350,20)
World.add(world,circulo)
quadrado=Bodies.rectangle(600,40,20,20)
World.add(world,quadrado)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(circulo.position.x,circulo.position.y,20,20)
  drawSprites();
rect(quadrado.position.x,quadrado.position.y,20,20)

}



