var ball;
var vy = 2;

function setup() {
  createCanvas(400,400);

  ball = createSprite(100,100,100,100);
}

function draw() 
{
  background(51);
  if(ball.position.x<=0 || ball.position.x>=width)
  {
    vy= -vy;
  }
  ball.velocity.y = vy;

  drawSprites();

}

