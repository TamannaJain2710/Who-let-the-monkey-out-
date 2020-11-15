var bImg;
var obImg,obG ;
var backgroundImg,bg;
var monkey,mImg;

function preload (){
    bImg = loadImage("banana.png");
    obImg = loadImage("stone.png");
    backgroundImg = loadImage("jungle.png")
    mImg = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
}

function setup (){
    createCanvas(600,600);
    monkey = createSprite(200,447,10,5);
    monkey.addAnimation("monkey",mImg);
    bg = createSprite(200,200,10,20);
    bg.addImage(backgroundImg);

    
}

function draw (){
     background(0);
     bg.velocityX = 3;
     if (bg.x < 0){
        bg.x = bg.width/2;
      }
       drawSprites()
}