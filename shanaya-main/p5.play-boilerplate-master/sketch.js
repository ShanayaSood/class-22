//Name spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,box;
var ground
function setup() {
  createCanvas(800,400);
  //creating engine
  engine = Engine.create();
   //creating world
   world = engine.world;

  
   box =  Bodies.rectangle(400,100,50,50)
  //Adding phy obj to main world
   World.add(world,box);
   var option={isStatic:true}
   ground= Bodies.rectangle(400,380,800,20,option)
   World.add(world,ground);
  console.log(box)
}

function draw() {
  background(0);  
 rectMode(CENTER);
  Engine.update(engine);
  rect (box.position.x , box.position.y , 50 ,50 )
  rect(ground.position.x,ground.position.y,800,20)
}