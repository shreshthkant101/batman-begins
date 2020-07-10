const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var rain = [];
var wayne;
var light;
function preload(){
    light = loadImage('lightening.png');
}
function setup(){
    var canvas = createCanvas(1280,605);
    engine = Engine.create();
    world = engine.world;
    wayne = new Umbrella(640,560);
}
function draw(){
    background(0);
    Engine.update(engine);
    
    rain.push(new Rain(random(0,1280),0,random(2,7)));
    if(frameCount % 90 == 0){
        image(light,random(280,1080),random(0,10),100,180);
    }
    for(var x = 0;x < rain.length; x++){
        rain[x].display();
    }
    wayne.display();
}