const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particle = [];
var division = [];
var plinko = [];

var score = 0;

var particle1;

var count = 0;

var divisionHeight=300;

var gameState = "end";

function setup() {
  createCanvas(800,800);
  
  engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2,height,width,20);

   for(var k=0;k<=width;k=k+80){
       division.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
   } 

   for(var j = 75; j<=width; j = j + 50){
     plinko.push(new Plinko(j,75));
   }
   
   for(var j = 50; j<=width-10; j = j + 50){
    plinko.push(new Plinko(j,175));
  }

  for(var j = 75; j<=width; j = j + 50){
    plinko.push(new Plinko(j,275));
  }

  for(var j = 50; j<=width-10; j = j + 50){
    plinko.push(new Plinko(j,375));
  }

}

function draw() {
  background(0); 

  textSize(35);
  text("score :"+score,20,40);
  fill("white");
  text("500",5,550);
  text("500",80,550);
  text("500",160,550);
  text("500",240,550);
  text("100",400,550);
  text("100",480,550);
  text("100",550,550);
  text("100",640,550);
  text("100",720,550);
  
  Engine.update(engine);
  
   ground.display();
   
   if(gameState==="end"){
     text("gameover",150,250);
   }

  for(var i=0;i<plinko.length;i++ ){
    plinko[i].display();
  }
   if(particle1!==null){
     particle1.display();
     if(particle1.body.position.y>760){
       if(particle1.body.position.x<300){
         score=score+500;
         particle1=null;
         if(count>=5){
           gameState="end";
         }
       }
       else if(particle1.body.position.x<900 && particle1.body.position.x>301){
        score=score+100;
        particle1=null;
        if(count>=5){
          gameState="end";
        }
      }
     }
   }

   for(var i=0;i<division.length;i++ ){
    division[i].display();
  }

  drawSprites();
}

function mousePressed(){
   if(gameState!=="end"){
     count++
     particle1=new Particle(mouseX,10,10,10);
   }

}
