var trex, trex_running, trex_collided;
var ground, groundImage;
var cade_o_chao;
var ih_vai_chuve;
var ih_vai_chuve_image;

function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trex_collided = loadImage("trex_collided.png");
  ih_vai_chuve_image=loadImage("cloud.png");
  groundImage = loadImage("ground2.png");
}

function setup() {
  createCanvas(600, 200);

  //criar sprite trex
  trex = createSprite(50,160,20,50);
  cade_o_chao=createSprite(200,190,400,10);
cade_o_chao.visible=false;
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //crriar sprite ground (chão)
  ground = createSprite(200,180,400,20);
  
  ground.addAnimation("chãzin geuado",groundImage);
  

  
  
}

function draw() {
  background(0);
ground.velocityX = -4;
  console.log(trex.y);
deus_criou_as_nuvi()
  //pular quando barra de espaço é pressionada
  if (keyDown("space")&& trex.y>=161.4){
    trex.velocityY = -10;
  }

  trex.velocityY = trex.velocityY + 0.8

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  //impedir trex de cair
  trex.collide(cade_o_chao);

  drawSprites();
}
function deus_criou_as_nuvi(){
  if(frameCount%60==0){     //A nuvem só aparecera quando o valor do frameCount for um número que ao ser dividido por 60 o resto de 0.
    ih_vai_chuve=createSprite(600,100,40,10);
    ih_vai_chuve.addImage("a nuvi passando",ih_vai_chuve_image);
    ih_vai_chuve.scale=0.1;
  ih_vai_chuve.velocityX=-5.5;
  ih_vai_chuve.y=Math.round(random(149,150));
  ih_vai_chuve.depth=trex.depth;
  trex.depth=trex.depth+1;
  }
}