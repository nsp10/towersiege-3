const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var blocks1, ground, slingshot, blocks;
var score;
var gameState = "onSling";
var backgroundImg;

function preload() {
}

function setup() {
  createCanvas(1500, 600);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(1031, 466, 350, 20);
  blocks1 = new Blocks(1030, 400, 40, 40);
  blocks2 = new Blocks(1030, 400, 40, 40);
  blocks3 = new Blocks(1030, 400, 40, 40);
  blocks4 = new Blocks(1030, 400, 40, 40);
  blocks5 = new Blocks(1070, 400, 40, 40);
  blocks6 = new Blocks(1070, 400, 40, 40);
  blocks7 = new Blocks(1070, 400, 40, 40);
  blocks8 = new Blocks(990, 400, 40, 40);
  blocks9 = new Blocks(990, 400, 40, 40);
  blocks10 = new Blocks(990, 400, 40, 40);
  blocks11 = new Blocks(1110, 400, 40, 40);
  blocks12 = new Blocks(1110, 400, 40, 40);
  blocks13 = new Blocks(950, 400, 40, 40);
  blocks14 = new Blocks(950, 400, 40, 40);
  blocks15 = new Blocks(1150, 400, 40, 40);
  blocks16 = new Blocks(910, 400, 40, 40);

  polygon = new Polygon(200, 200, 60, 60, 0);
  slingshot = new Slingshot(polygon.body, { x: 197, y: 312 });

  score = 0;
  Engine.run(engine);
}

function draw() {
  background("lightblue");

  rectMode(CENTER);
  ground.display();
  fill("black");
  text("SCORE: " + score, 1200, 100);

  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  blocks6.display();
  blocks7.display();
  blocks8.display();
  blocks9.display();
  blocks10.display();
  blocks11.display();
  blocks12.display();
  blocks13.display();
  blocks14.display();
  blocks15.display();
  blocks16.display();

  blocks1.score();
  blocks2.score();
  blocks3.score();
  blocks4.score();
  blocks5.score();
  blocks6.score();
  blocks7.score();
  blocks8.score();
  blocks9.score();
  blocks10.score();
  blocks11.score();
  blocks12.score();
  blocks13.score();
  blocks14.score();
  blocks15.score();
  blocks16.score();

  polygon.display();
  slingshot.display();

  drawSprites();
}

function mouseDragged() {
  if (gameState !== "Launched") {
    Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY });
  }
}

function mouseReleased() {
  slingshot.fly();
  gameState = "Launched";
}
function keyPressed() {
  if (keyCode === 32) {
    gameState = "onSling";
    slingshot.attach(polygon.body);
  }
}

async function data() {
  var data = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var datajson = await data.json();
  var dt = await datajson.datetime;
  var hr = await dt.slice(11, 13);
  console.log(hr);
  if (hr > 06 && hr < 18) {
    bg = "images/light.jpeg";
  } else {
    bg = "images/night.jpg";
  }
  backgroundimg = loadImage(bg);
}
