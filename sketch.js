var car1, wall1, car1speed, speed, weight, deformation;

function setup() {
  
  speed = 400; // adjust the speed
  weight = 45; // adjust the weight

  car1speed = speed/100;

  createCanvas(800,400);
  
  car1 = createSprite(50,50,40,20);
  car1.shapeColor = (255);
  
  
  wall1 = createSprite(700,50,10,40);

  car1.velocityX = car1speed;

  
}

function draw() {
  background(0);
  if(wall1.x - car1.x < (car1.width+wall1.width)/2)
  {
    var deformation = 0.5*weight*speed*speed/22500;
    car1.velocityX = 0;
    if(deformation>100)
    {
      car1.shapeColor = color(0,255,0);
    }
    if(deformation<180 && deformation>100)
    {
      car1.shapeColor = color(255,255,0);
    }
    if(deformation>180)
    {
      car1.shapeColor = color(255,0,0);
    }
  }
  drawSprites();
}