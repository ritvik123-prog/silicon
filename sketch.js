var bg;
var shooterStandingImg, shooterStanding;
var shooterShootingImg, shooterShooting;
var police,policeImg;
var gunImg, gun;
var BigGunshooterStandingImg,BigGunshooterStanding;
var BigGunshooterShootingImg,BigGunshooterShooting;
var police2Img, Police2;
var bulletImg, bullet;
var bullets=[]
var gameState="serve"
var level=0;
var police_Group
var score=0
function preload(){
 bg=loadImage("bgstreet.jpeg")
 shooterStandingImg=loadImage("shooterstill-removebg-preview.png")
 policeImg=loadImage("policespritesheet-removebg-preview.png")
 gunImg=loadImage("gun-removebg-preview.png")
 police2Img=loadImage("police-removebg-preview.png")
 bulletImg=loadImage("bullet-removebg-preview.png")
 BigGunshooterStandingImg=loadImage("Biggunshooterstanding.png")
}
function setup() {
 createCanvas(displayWidth - 20, displayHeight-30);
 
police_Group=new Group()

  bullet=createSprite(138,displayHeight-355)
  bullet.addImage(bulletImg)
  bullet.scale=0.1
  bullet.velocityX=0;
 
//  BigGunshooterStanding=createSprite(displayWidth/8, displayHeight-300)
  //BigGunshooterStanding.addImage( BigGunshooterStandingImg);
shooterStanding=createSprite(displayWidth/8, displayHeight-200)
shooterStanding.addImage(shooterStandingImg)
police=createSprite(displayWidth/2, displayHeight-300)
police.addImage(policeImg)
police.scale=0.5
police.visible=false;
gun=createSprite(displayWidth/4,displayHeight-300)
gun.addImage(gunImg)
gun.visible=false;
gun.scale=0.3
Police2=createSprite(displayWidth/5,displayHeight-300)
Police2.addImage(police2Img)
Police2.scale=0.5
Police2.visible=false;
}
function draw() {
background(bg);
textSize(45)
text("Score: "+ score, width-200, 100)

if(keyDown("space")){
  bullet.velocityX=10
  bullet.x=138
  bullet.y=displayHeight-355
}
for(var i=0; i<police_Group.length; i++){
  if(police_Group.get(i).isTouching(bullet)){
    police_Group.get(i).destroy()
    score=score+1
  }
}
if(police_Group.Each(police_Group.x)< shooterStanding.x){
  score=score-1
}
spawnPolice();
spawnGun();
drawSprites();
}
function spawnPolice(){
  if(frameCount%200===0){

    police0=createSprite(width,height-200)
police0.scale=0.7;
police0.y=Math.round(random(height-200,height-300))

 var rand=Math.round(random(1,2))
    switch(rand){
case 1: police0.addImage(policeImg)
break;
case 2: police0.addImage(police2Img)
break;
default:break;
    }
police0.velocityX=-2
police_Group.add(police0)
  }
}
function spawnGun(){
 if(frameCount%8000===0){
   rifle=createSprite(shooterStanding.x,0)
rifle.addImage(gunImg)
rifle.scale=0.3;
rifle.velocityY=15
} 

}