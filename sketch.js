const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var red;
var box1,box2,box3,box4,box5;
var tronco1,tronco2;
var pig1,pig2;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    red = new Bird(100,100);

    box1 = new Box(700,320,50,50);
    box2 = new Box(850,320,50,50);
    box3 = new Box(700,250,50,50);
    box4 = new Box(850,250,50,50);
    box5 = new Box(780,160,67,67);

    tronco1 = new Tronco(800,260,300,PI/2);
    tronco2 = new Tronco(800,230,300,PI/2);
    tronco3 = new Tronco(760,140,150,PI/7);
    tronco4 = new Tronco(840,140,150,-PI/7);

    pig1 = new Pig(780,320);
    pig2 = new Pig(780,240);

    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    red.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    tronco1.display();
    tronco2.display();
    tronco3.display();
    tronco4.display();
    pig1.display();
    pig2.display();
    ground.display();
}