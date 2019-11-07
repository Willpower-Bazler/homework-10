//vars for eyes
var xleftblackmovement = 160;
var yrightblackmovement = 200;
var xleftwhitemovement = 160;
var yrightwhitemovement = 240;

var randommovement1;
var randommovement2;
var randommovement3;
var randommovement4;

//vars for mouth
var xmouthmovement = 160;
var ymouthmovement = 240;

var randommovement5;

//vars for text
var textsize = 20;

var textmovement = -1;


function setup() {
  createCanvas(400, 400);
  randommovement1 = Math.floor(Math.random() * 10) + 1;
  randommovement2 = Math.floor(Math.random() * 10) + 1;
  randommovement3 = Math.floor(Math.random() * 10) + 1;
  randommovement4 = Math.floor(Math.random() * 10) + 1;
  randommovement5 = Math.floor(Math.random() * 10) + 1;

}

function draw() {
  
  //background
  background(220);
  
  //ears
  fill(255,200,120);
  ellipse(100,200,20,40);
  ellipse(300,200,20,40);
  
  //face
  circle(200,200,200);
  
  //eyes
  fill(255,255,255);
  ellipse(xleftwhitemovement,200,40,20);
  ellipse(240,yrightwhitemovement,40,20);
  if(xleftwhitemovement >= 400 || xleftwhitemovement <= 0)
    {
       randommovement1 *= -1;
    }

     xleftwhitemovement += randommovement1;
  
  if(yrightwhitemovement >= 400 || yrightwhitemovement <= 0)
    {
       randommovement2 *= -1;
    }

     yrightwhitemovement += randommovement2;
  
  fill(0,0,0);
  circle(xleftblackmovement,200,20);
  circle(240,yrightblackmovement,20);
  //left black moves x and right black moves y
  if(xleftblackmovement >= 400 || xleftblackmovement <= 0)
    {
       randommovement3 *= -1;
    }

     xleftblackmovement += randommovement3;
  
  if(yrightblackmovement >= 400 || yrightblackmovement <= 0)
    {
       randommovement4 *= -1;
    }

     yrightblackmovement += randommovement4;
  
  
  //mouth
  fill(255,150,180);
  rect(xmouthmovement,ymouthmovement,50,10);
  if((xmouthmovement >= 400 || xmouthmovement <= 0) || (ymouthmovement >= 400 || ymouthmovement <= 0))
    {
       randommovement5 *= -1;
    }

     xmouthmovement += randommovement5;
     ymouthmovement += randommovement5;
  
  //hat
  fill(0,255,0);
  triangle(100, 150, 200, 50, 300, 150);
  
  
  //eyebrows and dimple
  line(135, 190, 185, 175);
  line(215, 175, 265, 190);
  point(225, 240);
  
  //text
  fill(0,0,0);
  textSize(textsize);
  text('I hAvE bIg BrAiN', 150, 130);
  
  
  fill(0,0,0);
  text('-Will Bazler', 50, 350);
  
  if(textsize >= 20 || textsize <= 25)
    {
       textmovement *= -1;
    }

     textsize += textmovement;
  
 
  
  
}