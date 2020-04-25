
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
 
var engine;
var world;
var boxes = [];
 
var ground;
var gSlider;
 
function setup() {
    createCanvas(400, 400);
     engine = Engine.create();
    world = engine.world;
     gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max);
    ground=new ground(400,400,40,350);
    ground.shapeColor="black";
    box=createSprite(200,200,50,50);


}
 
function mousePressed() {
    if (mouseY < 350) {
        
    }
}
 
function draw()}
 background(0);
 var fVal = gSlider.value();
 rectMode(CENTER);
 rect(200,200,50,50);
drawSprites;
}
 


function Box(x, y, w, h, options) {
    var options = {
    restitution=0.8;
    friction=0.4;
    }
 
}


    this.show = function () {
    }
}