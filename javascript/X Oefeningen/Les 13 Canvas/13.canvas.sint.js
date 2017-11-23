'use strict'
var canvas, context, topx;

//window.onload = drawSaint;
window.onload = respawnSint;

function respawnSint(){
    drawSaint();
    setInterval(drawSaint, 9000);
}

function drawSaint() {
    canvas = document.getElementById("myCan");
    context = canvas.getContext("2d"); // future 3D
    // context.clearRect(0,0, canvas.clientWidth, canvas.clientHeight); // alles wissen
    topx = canvas.clientWidth / 2; // midden van onze CANVAS  
    // kleuren:
    context.fillStyle = "#CC99FF";
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    // next layer:
    drawFace();
    setInterval(candyRain,2000);
}

function drawFace() {
    drawCircle("#ffccff", topx, 320, 70); //PINK
    drawEyes("#ffffff", topx - 25, topx + 25, 315, 10); // WIT
    drawEyes("#66ccff", topx - 25, topx + 25, 315, 5);  // BLAW
    drawBeard();
    drawMouth(); // fuschia
    drawSillyHat();
    drawGoldlines();
    drawImage("zakzak.png", randW(), randH(), 150, 150)
    drawImage("pres.png", randW(), randH(), 150, 150);
    drawText("purple", "I'm Fabulous!", topx, canvas.clientHeight - 50);
}

function drawCircle(color, x, y, radius) {
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI); // volledige circel
    context.fillStyle = color;
    context.fill();
}

function drawMouth() {
    context.beginPath();
    context.arc(topx, 350, 20, Math.PI / 16, Math.PI - Math.PI / 16); // volledige circel
    context.fillStyle = "#ff3399";
    context.fill();
}

function drawEyes(color, x1, x2, y, radius) {
    context.beginPath();
    context.arc(x1, y, radius, 0, 2 * Math.PI); // volledige circel
    context.arc(x2, y, radius, 0, 2 * Math.PI); // volledige circel
    context.fillStyle = color;
    context.fill();
}

function drawPolyWog(color, cornersV) {
    context.beginPath();
    context.moveTo(cornersV[0], cornersV[1]); // move pen up to new place 
    for (var i = 2; i < cornersV.length; i += 2) {
        context.lineTo(cornersV[i], cornersV[i + 1]);   // tot welk punt moet lijn lopen 
    }
    context.lineTo(cornersV[0], cornersV[1]);
    context.fillStyle = color;
    context.fill();
}

function drawBeard() {
    drawPolyWog("white", [topx - 60, 360, topx + 60, 360, topx, 520]);
}

function drawSillyHat() {
    drawPolyWog("fuschia", [topx - 60, 300, topx - 120, 180, topx, 60, topx + 120, 180, topx + 60, 300]);
}

function drawGoldlines() {
    drawLines("lightpink", topx - 120, 180, topx + 120, 180, 10);
    drawLines("lightpink", topx, 60, topx, 300, 10);

}

function drawLines(color, x1, y1, x2, y2, width) {
    context.beginPath();
    context.moveTo(x1, y1); // move pen up to new place 
    context.lineTo(x2, y2); // move pen up to new place 
    context.strokeStyle = color;
    context.lineWidth = width;
    context.stroke(); // altijd laatste op lijn !! 
}

function drawImage(imgName, x, y, width, height) {
    var img = new Image();
    img.src = imgName;
    img.onload = function () {// images dont load as fast so Load IMG before putting it on canvas. 
        context.drawImage(img, x, y, width, height); // anoniemefunctie 
    }
}


function drawText(color, text, x, y) {
    context.fillStyle = color;
    context.font = "bold 2em sans-serif";
    context.textAlign = "center";
    context.fillText(text, x, y);

}

function randW() {
    var randomWidth = Math.floor(Math.random() * (canvas.clientWidth));
    return randomWidth;
}
function randH() {
    var randomWidth = Math.floor(Math.random() * (canvas.clientHeight));
    return randomWidth;
}

//-------------------------------------------------------------------------------------------
function drawCandy(imgName, width, height) {
    var img = new Image();
    img.src = imgName;
    img.onload = function () {// images dont load as fast so Load IMG before putting it on canvas. 
        context.drawImage(img, randW(), randH(), width, height);// anoniemefunctie 
    }
    
 //   setInterval(candyRain, 300);
}

function candyRain() {
    drawCandy("candy.png", 100,100);
    drawCandy("candy2.png", 100,100);
    drawCandy("candy3.png", 100,100);
}

/*
var e = true;
function candyRain() {
    if (e) {
        context.drawImage(img, randW(), randH(), width, height);
        e = false;
    }
    context.drawImage(img, randW(), randH(), width, height);
    e = true;

}
    
*/