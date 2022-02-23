var jackson 
var track
var border1
var border2 



function preload(){
  //pre-load images
 jackson_running=loadImage("runner-1.png","runner-2.png")
 trackImage=loadImage("path.png")



}

function setup(){
  createCanvas(400,400);
 //create sprites here 
 track=createSprite(200,180,400,20)
 track.addImage("track",trackImage)
 track.y=track.width/2
 track.velocityY=4

 jackson=createSprite(205,350,20,20)
 jackson.addImage("running",jackson_running)
 jackson.scale=0.1

 border1=createSprite(50,300,35,200)
 border2=createSprite(350,300,35,200)


}

function draw() {
  background(0)
  drawSprites() 

 if(track.y>400){
track.y=200
 }
jackson.x=World.mouseX
jackson.collide(border1)
jackson.collide(border2)
border1.visible=false 
border2.visible=false 

}
