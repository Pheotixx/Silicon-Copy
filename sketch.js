var canvas, backgroundImage;
var form;
var menu;
var regno;
var img_1;

function preload(){
    
}

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    form = new Form();
   
    
}
function draw(){
   background("pink");

    form.display();
   
}