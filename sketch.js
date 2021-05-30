var canvas;
var music;
var block1,block2,block3,block4,box,edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
     block1 = createSprite(0,580,360,30);
     block1.shapeColor = "blue";
     block2 = createSprite(295,580,200,30);
     block2.shapeColor = "red";
     block3 = createSprite(515,580,200,30);
     block3.shapeColor = "pink";
     block4 = createSprite(740,580,220,30);
     block4.shapeColor = "brown";
     box = createSprite(random(20,750),100, 40,40);
     box.velocityX = 4;
     box.velocityY = 7;
     box.shapeColor = "white";

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);



    //add condition to check if box touching surface and make it box
    if (box.isTouching(block1)&& box.bounceOff(block1)){
       box.shapeColor = "blue";
       music.play();
    
    }
    if (box.isTouching(block2)&& box.bounceOff(block2)){
        box.shapeColor = "red";
        box.velocityX = 0;
         box.velocityY = 0;
        music.stop();
     }
     if (box.isTouching(block3)&& box.bounceOff(block3)){
        box.shapeColor = "pink";
        music.play();
     }
     if (box.isTouching(block4)&& box.bounceOff(block4)){
        box.shapeColor = "brown";
        music.play();
     }
     
     
    drawSprites();
}
