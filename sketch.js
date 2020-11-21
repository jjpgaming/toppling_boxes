const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var grnd;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(270,30,50,70);
  box2 =  new Box(300,300,70,60);
  grnd = new Grnd(200,380,400,50)
}

function draw(){
    background(0);
    Engine.update(engine);
   fill("gold") 
    box1.display();
    fill("green")
box2.display();
fill("brown")
    grnd.display();
}