
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var rectangle;
var square;
var ball;
var floor;


function preload(){
  createCanvas(400);

  engine = Engine.create();
  world = engine.world;
}

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;

  var ball_options = {
	restitution: 0.5,
	friction:0.2,
	frictionAir:0.0
	}
  
	var square_options = {
	  restitution: 0.7,
	  friction:0.01,
	  frictionAir:0.1
  }
  
	var rectangle_options = {
	  restitution: 0.01,
	  friction:1,
	  frictionAir:0.3
  }
  
    var floorObs = {
	isStatic: true
	}
  //Crie os Corpos Aqui.
  ball = Bodies.circle(220,10,50,ball_options)
  World.add(world,ball);
  square = Bodies.rectangle(110,50,50,50,square_options)
  World.add(world,square);
  rectangle = Bodies.rectangle(350,50,50,50,rectangle_options)
  World.add(world,rectangle);
  floor = Bodies.rectangle(400,650,800,10,floorObs);
  World.add(world,floor);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,50)
  rect(square.position.x,square.position.y,50,50)
  rect(rectangle.position.x,rectangle.position.y,50,50)
  rect(floor.position.x,floor.position.y,700,10)

  drawSprites();
 
}