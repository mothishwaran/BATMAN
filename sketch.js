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


var thunderImg1;   
var thunderImg2;

function preload(){
  
  thunderImg1=loadAnimation("images/thunderbolt/1.png","images/thunderbolt/2.png","images/thunderbolt/3.png","images/thunderbolt/4.png");
  thunderImg2=loadAnimation("images/thunderbolt/4.png","images/thunderbolt/3.png","images/thunderbolt/2.png","images/thunderbolt/1.png");
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

if(frameCount%55===0){
  var thunder=createSprite(400,300,20,20);
   var rand=Math.round(random(1,2));

   switch(rand){
     case 1:thunder.addAnimation("the thunder",thunderImg1);
     break;

     case 2: thunder.addAnimation("the thunder",thunderImg2);
     break;

     default:
       console.log("their is an error  in your project")
   }

   if(rand>=2){
 thunder.destroy();
}
  
  }
  
  


   for(var k=0; k<droper.length; k++){
     droper[k].display();
   }

  
   

    umbrella.display();
   
    drawSprites();
   
   
    
}   

