const Engine = Matter.Engine;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const World =Matter.World;
const Events=Matter.Events;

var world,engine;

var drops;

var umbrella; 

var droper=[];

var maxDrops=200;

function preload(){
    
}

function setup(){
  createCanvas(800, 1200);
    engine= Engine.create();
    world=engine.world
  
  

  
 umbrella=new Umbrella(400,900)
}

function draw(){
    background(0)
  Engine.update(engine);
if(frameCount%30===0){
  for(var i=0; i<maxDrops; i++){
    droper.push(new Drop(random (0,800),random(0,800)))
}
}


   for(var k=0; k<droper.length; k++){
     droper[k].display();
   }

    umbrella.display();
   
   
   
    
}   

