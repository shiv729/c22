class Ground{
    constructor(x,y,width,height){// all properties and options are supposed to be in constructor(){}
        var options={
            isStatic: true
            //isStatci=true means that object doesnt move, restitution is the bounciness, etc etc 
        }   
        this.width=width;
        this.height=height; //this is because you need the inputs    
        //this.body= Bodin talks about the bounciness-- like a bouncy ball in physics
        //this is also for other variables outside this program. User input can also be done. 
        this.body= Bodies.rectangle(x,y,width,height,options);//shape of the object, (dimensions x,y,width,height)
        World.add(world, this.body); 
    }
        display(){
            rect(this.body.position.x,this.body.position.y,this.width,this.height); 
            //syntax- have to write this to display it x,y,width, height
        }//this.width and this.height because the computer will not understand
}
