
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

var ball;

var ground;
var leftSide;
var rightSide;


function setup() {
	createCanvas(1365, 765);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var options = {
		isStatic:false,
		restitution : 0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle (100, 50, 10, options); 
	World.add (world, ball);


	ground = new Ground (1365/2, 765-30, 1365, 20);
	leftSide= new Ground (1100, 675, 20, 120);
	rightSide= new Ground (800, 675, 20, 120);
  
}


function draw() {
	background(0);
	
	textSize(24);	
	text ("Press up arrow key to go up, and press down arrow key to make the ball fall in the bin", 300, 100);
	
	rectMode(CENTER);
	ellipseMode (RADIUS);
	
  Engine.update (engine);

  ellipse (ball.position.x, ball.position.y, 10, 10);


  ground.display ();
  leftSide.display ();
  rightSide.display ();

  keyPressed ();
  
  drawSprites();
 
}

function keyPressed () {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, ball.position, {x: 0.2, y:-0.4});
	}
}

