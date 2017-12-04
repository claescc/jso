'use strict'

window.onload = function () {
    init();
}

function init() {
    var btnC = frm.color;
    var btnF = frm.fonts;
    var btnI = frm.images;
    btnC.onchange = changeBackground;
    btnF.onchange = changeFont;
    btnI.onchange = changeImg;

    if (localStorage.background) {
        document.body.style.backgroundColor = localStorage.background;
        frm.color.value = localStorage.background;
    }
    if (localStorage.font) {
        document.body.style.fontFamily = localStorage.font;
        frm.fonts.value = localStorage.font;
    }
    if (localStorage.imageStorage) {
        let parent = document.getElementById("images");
        let newImg = document.createElement('img')
        newImg.src = localStorage.imageStorage;
        parent.appendChild(newImg);
    }
}

function changeBackground() {
    console.log("boe");
    let color = frm.color.value;
    localStorage.setItem('background', color); //save storage
    document.body.style.backgroundColor = color; // set bg
}

function changeFont() {
    let font = frm.fonts.value;
    localStorage.setItem('font', font); //save storage
    document.body.style.fontFamily = font;
}

function changeImg() {
    let img = frm.images.value;
    localStorage.setItem('imageStorage', img); //save storage
    var parent = document.getElementById("images");
    var imagesA = document.getElementsByTagName('img');
             for (var i = imagesA.length - 1; i >= 0; i--) { // remove list 
             parent.removeChild(imagesA[i]);
              }
    var newImg = document.createElement('img')
    newImg.src = img;
    parent.appendChild(newImg);
}


