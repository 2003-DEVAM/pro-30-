const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var box1,box3,box2,box4,box5,box6,box7,box8,box9,bird,slingShot;

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    // level-1
    box1 = new Box(630,235,30,40);
    box2 = new Box(660,235,30,40);
    box3 = new Box(690,235,30,40);
    box4 = new Box(720,235,30,40);
    box5 = new Box(750,235,30,40);
    // level-2
    box6 = new Box1(660,195,30,40);
    box7 = new Box1(690,195,30,40);
    box8 = new Box1(720,195,30,40);
    //level-3
    box9 = new Box2(690,155,30,40);
    
    //level-4
    box10 = new Box(930,85,30,40);
    box11 = new Box(960,85,30,40);
    box12 = new Box(990,85,30,40);
    
    //level-5
    box13 = new Box2(960,45,30,40);

    
   

    bird = new Bird(200,100);

   
    ground = new Ground(670,300,350,10);
    ground1 = new Ground(600,height,1200,20);
    ground2 = new Ground(970,150,200,10);
    

    slingShot= new SlingShot(bird.body,{x:200,y:100});
}

function draw(){
    background(0);
    Engine.update(engine);
   
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
   
    bird.display();
    ground.display();
    ground1.display();
    ground2.display();
    slingShot.display(); 

}


function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
    }
    
    function mouseReleased(){
        slingShot.fly();
    }

    function keyPressed(){
        if(keyCode===32){
         slingShot.attach(bird.body);  
        }
    }
    