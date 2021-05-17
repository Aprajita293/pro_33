const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var particles=[]
var plinkos=[]
var divisions=[]

var divisionHeight=300
var particle
var score=0
var count=0
var gameState="start"


function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground=new Ground(240,800,480,20)

  for(var k=0; k<=width; k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  }


  for(var j=75;j<width; j=j+50){
    plinkos.push(new Plinko(j,75))
  }

  for(var j=50;j<width-10; j=j+50){
    plinkos.push(new Plinko(j,175))
  }

  for(var j=75;j<width; j=j+50){
    plinkos.push(new Plinko(j,275))
  }

  
  for(var j=50;j<width-10; j=j+50){
    plinkos.push(new Plinko(j,375))
  }

  
}

function draw() {
  background(0);
  Engine.update(engine);
  textSize(35)
  text ("score: "+score,20,40)
  ground.display();
  text (" 500 ",5,550)
  text (" 500 ",80,550)
  text (" 200 ",165,550)
  text (" 200 ",245,550)
  text (" 100 ",325,550)
  text (" 100 ",405,550)

  if(gameState==="end"){
    textSize (100)
    text ("gameOver",150,250)
  }
  for(var k=0;k<divisions.length; k++){
    divisions[k].display();
  }
  
  for(var i=0;i<plinkos.length;i++){
    plinkos[i].display();
  }
  
 if(particle!==null){
   particle.display();
   if(particle.body.position.y>760){
     if(particle.body.position.x<300){
       score=score+500
       particle=null
       if(count>=5)
       gameState="end"
     }
     else if(particle.body.position.x<600 && particle.body.position.x>301){
       score=score+200
       particle=null
       if(count>=5)
       gameState="end"
     }
     else if(particle.body.position.x<900 && particle.body.position.x>601){
      score=score+100
      particle=null
      if(count>=5)
      gameState="end"
     }
   }
 }
 
}

function mousePressed(){
  if(gameState!=="end"){
    count++
    particle=new Particle(mouseX,10,10,10)
  }
}