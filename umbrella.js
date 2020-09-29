class Umbrella{
 constructor(x,y){
     var options={
         isStatic:true
     }
     this.umbrella=Bodies.circle(x,y,320,options);
     this.radius=320;
     this.image=loadAnimation("images/sprites/walking_1.png","images/sprites/walking_2.png","images/sprites/walking_3.png","images/sprites/walking_4.png","images/sprites/walking_5.png","images/sprites/walking_6.png","images/sprites/walking_7.png","images/sprites/walking_8.png");
     World.add(world,this.umbrella);
 }
   
    display(){
        var pos=this.umbrella.position;
        imageMode(CENTER);
        animation(this.image,pos.x,pos.y,10,10);
       
    }
}