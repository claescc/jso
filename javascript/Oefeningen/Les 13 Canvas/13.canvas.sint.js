'use strict'
var canvas, context, topx;

window.onload = drawSaint;

function drawSaint(){
    canvas = document.getElementById("myCan");    
    context = canvas.getContext("2d"); // future 3D
   // context.clearRect(0,0, canvas.clientWidth, canvas.clientHeight); // alles wissen
   topx = canvas.clientWidth/2; // midden van onze CANVAS  
// kleuren:
context.fillStyle = "#CC99FF";
context.fillRect(0,0, canvas.clientWidth, canvas.clientHeight); 
// next layer:
drawFace();
}

function drawFace(){
    drawCircle("#ffccff", topx, 320, 70); //PINK
    drawEyes("#ffffff", topx-25,topx+25, 315, 10); // WIT
    drawEyes("#66ccff", topx-25, topx+25, 315, 5);  // BLAW
  //  drawBeard();
    drawMouth(); // fuschia
}

function drawCircle(color, x, y, radius){
    context.beginPath();
    context.arc(x,y,radius,0,2*Math.PI); // volledige circel
    context.fillStyle = color;                     
    context.fill();
}

function drawMouth(){
    context.beginPath();
    context.arc(topx, 350 ,20, Math.PI/16,Math.PI - Math.PI/16); // volledige circel
    context.fillStyle = "#ff3399";                     
    context.fill();
}

function drawEyes(color, x1,x2, y, radius){
    context.beginPath();
    context.arc(x1,y,radius,0,2*Math.PI); // volledige circel
    context.arc(x2,y,radius,0,2*Math.PI); // volledige circel
    context.fillStyle = color;                     
    context.fill();
}

function drawPolyWog(color, cornersV){
    context.beginPath();
    context.moveTo(cornersV[0], cornersV[1]); // move pen up to new place 
    for(var i=2; cornersV.length; i +=2){
        context.lineTo(cornersV[i], cornersV[i+1]);   // tot welk punt moet lijn lopen 
    }
    context.lineTo(cornersV[0], cornersV[1]);
    context.fillStyle = color;                     
    context.fill();
}
function drawBeard(){
   drawPolyWog("white", [topx-60, 360, topx+60, 360, topx, 520]);
}