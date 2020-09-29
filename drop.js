class Drop{
     constructor(x,y){
       var options={
           isStatic:false,
           friction:1
       }
       this.body=Bodies.circle(x,y,0.1,options);
       this.radius=0.1;
       World.add(world,this.body);
     }

     display(){
         var pos=this.body.position;
         fill ("blue");
         ellipse(pos.x,pos.y,5)
     }

     update(){
         if(this.body.position.y > height){
             Matter.Body.setPosition(this.body,{x:random (0,400)},{y:random(0,400)})
         }
     }

}