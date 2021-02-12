const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var score = 0;
function preload(){
    hex = loadImage("polygon.png");
}

function setup(){
    createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    ball = Bodies.circle(50,250,10)
    World.add(world,ball);

   ground1 = new Ground(320,300,250,10);
   ground2  = new Ground(600,200,200,10);
   ground3 = new Ground(400,400,800,10);

   box1 = new Box(220,260,30,40);
   box2 = new Box(250,260,30,40);
   box3 = new Box(280,260,30,40);
   box4 = new Box(310,260,30,40);
   box5 = new Box(340,260,30,40);
   box6 = new Box(370,260,30,40);
   box7 = new Box(400,260,30,40);

   box8 = new Box(250,220,30,40);
   box9 = new Box(280,220,30,40);
   box10 = new Box(310,220,30,40);
    box11 = new Box(340,220,30,40);
    box12 = new Box(370,220,30,40);

    box13 = new Box(280,180,30,40);
    box14 = new Box(310,180,30,40);
    box15 = new Box(340,180,30,40);

    box16 = new Box(310,140,30,40);

    box17 = new Box(530,160,30,40);
   box18 = new Box(560,160,30,40);
   box19 = new Box(590,160,30,40);
    box20 = new Box(620,160,30,40);
    box21 = new Box(650,160,30,40);

    box22 = new Box(560,120,30,40);
    box23 = new Box(590,120,30,40);
    box24 = new Box(620,120,30,40);

    box25 = new Box(590,80,30,40);

console.log(ball.position);
chain = new Chain(this.ball,{x:70,y:250});



}
function draw(){
    background('grey');
    textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);
text("score:"+score,700,40)
    Engine.update(engine);
    ground1.display();
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
    box14.display();
    box15.display();
    box16.display();

    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();

    box22.display();
    box23.display();
    box24.display();
    box25.display();


    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();

    box13.score();
    box14.score();
    box15.score();
    box16.score();

    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();

    box22.score();
    box23.score();
    box24.score();
    box25.score();
 
 
   ground2.display();
    chain.display();

imageMode(CENTER);
image(hex,ball.position.x,ball.position.y,30,30);

}
function mouseDragged(){
    Matter.Body.setPosition(ball,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    chain.fly();
}
function keyPressed(){
    if(keyCode === 32){
        chain.attach(ball);
    }
}
