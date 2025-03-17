  var canvasWidth = 640
  var canvasHeight = 480
  function preload(){

    characterImg = loadImage("images/Hero2.png");
    bgImg = loadImage("images/bgud.png");
   monsterImg = loadImage("images/Reaper1x.png");
   ghostImg = loadImage("images/uemp.png")
    mercenaryImg = ("images/skelmer.png")
    projectileImg = loadImage("images/gunproj2.png")
  
  }

  
var character = 0;
  var characterX = 320;
  var characterY = 100;
  var sprWidth = 64;
  var sprHeight = 64;
  var speed = 4
  
  var monster = 0;
    var monsterX = 320;
    var monsterY = 300;
    
    var direction = 90;
  
    var ghost = 0;
    var ghostX = 500;
    var ghostY = 400;
    
  

function setup() {
    
   alert("Start Game")
  
  createCanvas(canvasHeight, canvasWidth);
  character = createSprite(characterX, characterY, sprWidth, sprHeight);
  character.addImage(characterImg,"images/Hero2.png")
  
    monster = createSprite (monsterX, monsterY, sprWidth, sprHeight);
    monster.addImage (monsterImg,"images/monster.png")
  
    projectiles = new Group();
   
  
 
    ghost = createSprite (ghostX, ghostY, sprWidth, sprHeight);
    ghost.addImage (ghostImg,"images/ghost.png")
    enemyGroup = new Group();
    enemyGroup.add(monster);
    enemyGroup.add(ghost)
   
    character.setCollider("rectangle", 0, 0, 40, 40)
    monster.setCollider("rectangle", 0, 0, 40, 40)
    ghost.setCollider("rectangle", 0, 0, 40, 40)
  
}


  function playerControls(){
    if (keyIsDown(RIGHT_ARROW)) {
      character.position.x += speed
      if (character.position.x + sprWidth/2 > canvasWidth){
        character.position.x = canvasWidth - sprWidth/2
      }

    } else if (keyIsDown(LEFT_ARROW)) {
      character.position.x -= speed
      if (character.position.x < 0 + sprWidth/2){
        character.position.x = 0 + sprWidth/2
      }

    } else if (keyIsDown(DOWN_ARROW)) {
      character.position.y += speed
                     
    if (character.position.y + sprHeight/2 > canvasHeight){
      character.position.y = canvasHeight - sprHeight/2
    
    } 
    
    } else if (keyIsDown(UP_ARROW)) {
      character.position.y -= speed
    if (character.position.y < 0 + sprHeight/2 > canvasHeight){
       character.position.y = 0 + sprHeight/2
    }
    
      
    }
  }
  function collisions(){
    enemyGroup.overlap(projectiles);
    character.collide(enemyGroup);
  }


function enemyMovements(){
   direction +=2;
   monster.setSpeed(3, direction)
 }
  


function mousePressed(){
var projectile = createSprite(character.position.x, character.position.y)
projectile.addImage(projectileImg)
projectile.attractionPoint(10+speed, mouseX, mouseY)
projectile.setCollider("rectangle", 0, 0, 40, 40)
  projectiles.add(projectile);

}


function draw() {
    background(bgImg);
    playerControls();
    collisions();
    ghost.attractionPoint(0.2, character.position.x, character.position.y)
    ghost.maxSpeed = 3;
    enemyMovements();
    drawSprites();

  
}