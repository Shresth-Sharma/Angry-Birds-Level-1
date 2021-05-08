const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var img;
var Birds = 2 ;
function preload() {
    getTime();
     img=loadImage=("sprites/bg2.png")
}

function setup(){
    var canvas = createCanvas(1360,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(680,height,1360,20);
    platform = new Ground(150, 510, 300, 170);
    box1 = new Box(800,540,100,100);
    box2 = new Box(800,430,100,100);
    box3 = new Box(800,330,100,100);
    box4 = new Box(800,230,100,100);
    box5 = new Box(1000,540,100,100);
    box6 = new Box(1000,430,100,100);
    box7 = new Box(1000,330,100,100);
    box8 = new Box(1000,230,100,100);
    log1 = new Log(735,490,200,PI);
    log2 = new Log(735,290,200,PI);
    log3 = new Log(735,90,100,PI);
    log4 = new Log(1062,490,200,PI);
    log5 = new Log(1062,290,200,PI);
    log6 = new Log(1062,90,100,PI);
    log7 = new Log(900,465,300,PI/2)
    pig1 = new Pig(800,215);
    pig2 = new Pig(1000,215);
    pig3 = new Pig(900,450)
    

    bird = new Bird(200,250);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:250});
}

function draw(){
    background("blue")
    
    
    Engine.update(engine);
    //strokeWeight(4);
    textSize(40);
    text("Birds Left : "+Birds,50,55);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    log5.display();
    log6.display();
    log7.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    pig1.display();
    pig2.display();
    pig3.display();
    

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode===32 && Birds>=1){
        Birds = Birds-1;
        bird.trajectory=[];
        Matter.Body.setPosition(bird.body,{x:200,y:266});
    slingshot.attach(bird.body);
    }
}

async function getTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
console.log(responseJSON)
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    console.log(datetime);
    console.log(hour);
    if(hour>=06 && hour<=19){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
}
