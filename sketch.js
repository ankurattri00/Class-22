//namespacing

const Engine=Matter.Engine;   // universe
const World= Matter.World;   // Globe
const Bodies= Matter.Bodies;   // Object

var engine,world,ground;
var ball;

function setup() {
  createCanvas(400,400);
  //createSprite(200,200,50,50);

 engine=Engine.create();
 world=engine.world;

var ground_options = {

  isStatic: true

}
var ball_options={
  restitution:2.0
}
 ground=Bodies.rectangle(200,390,400,20, ground_options);
ball=Bodies.circle(200,200,30,ball_options);
 World.add(world,ground);
World.add(world,ball);
console.log(ground);

}

function draw() {
  background(0,0,0); 
Engine.update(engine);
  rectMode (CENTER);
  fill("brown");
  rect (ground.position.x,ground.position.y,400,20);
ellipseMode(RADIUS);
fill("blue");
ellipse(ball.position.x,ball.position.y,30);
 
}