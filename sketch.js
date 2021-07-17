var box;
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,20,20);

}

function draw() 
{
  background("yellow");


if(keyIsDown(RIGHT_ARROW)){
  background("green");
  box.position.x=box.position.x+3
}

if(keyIsDown(LEFT_ARROW)){
background("pink");
box.position.x=box.position.x-3
}

{
  if(keyIsDown(DOWN_ARROW)){
    background("red");
    box.position.y=box.position.y+3
  }
}
{
if(keyIsDown(UP_ARROW)){
  background("orange");
  box.position.y=box.position.y-3
}
}
  drawSprites()
}

 