//SHIVANI
const Engine = Matter.Engine; //physics 
const World= Matter.World; //bg world canvas
const Bodies = Matter.Bodies; 

var engine, world;
var object;
var ground;
var b1,b2,b3;
function setup(){
    //var canvas = createCanvas(400,400);
    createCanvas(400,400);
    //.create(); runs the function Engine
    engine = Engine.create();//engine = Matter.Engine.create();
    world = engine.world;
//CREATING YOUR BODIES
//var object_options ={
 //   isStatic: true
//}
   // ground=Bodies.rectangle(200,380,400,20, object_options);// adding the sprite; instead of draw sprites, 
    //XOBJECT OPTION FOR STATIONARY
   // World.add(world, ground);


   b1 = new Box(200,100,50,50); //creating an object
   // new "class name(with dimensions/attributes inside here)"
   //in this case, Box is the class name.

   b2 = new Box(100,100,50,50);
   b3 = new Box(300,100,50,50);
ground= new Ground(200,370,400,20);

    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER); //syntax- have to write this to display it
    
    //rect(ground.position.x,ground.position.y,400,20);// we use other x and y values because 
    //syntax- have to write this to display it x,y,width, height
    //RECT^^^ x and y values are just for show. if the variables x and y is bigger, it will be invisble but that width and height.
    
    b1.display(); //class displaying the object
    b2.display();
    b3.display();
    ground.display();
}
