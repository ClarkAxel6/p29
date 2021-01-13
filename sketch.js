
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var treeIMG;
var ground1;
var boy;
var stone;
var sling;
var mango1, mango2, mango3, mango4, mango5;

function preload()
{
	treeIMG = loadImage('mangoes/tree.png');
	boy = loadImage('mangoes/boy.png');	
}

function setup() {
	createCanvas(800, 700); 

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(400, 650, 800, 100);
	stone = new Stone(55, 500);
	
	sling = new SlingShot(stone.body, {x: 55, y: 500});
	
	mango1 = new Mangoes(700, 300);
	mango2 = new Mangoes(600, 300);
	mango3 = new Mangoes(500, 300);
	mango4 = new Mangoes(550, 250);
	mango5 = new Mangoes(650, 250);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();
  image(treeIMG, 401, 150, 400, 500);
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  image(boy,20, 420, 200, 300);
  sling.display();
  stone.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}

function detectCollision(lstone, lmango){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var d = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(d <= lmango.radius + lstone.radius){
		Matter.Body.setStatic(lmango.body, false);
	}
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x: 55, y: 500});
		sling.attach(stone.body);
	}
}