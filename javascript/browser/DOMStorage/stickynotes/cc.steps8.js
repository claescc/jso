'use strict'

function init() {
    stickyStorageCheck();
    document.getElementById("newstick").onclick = newSticky;
}

window.onload = init;
//-------------------------- D O M ----------------------------------------------------
let globTeller = 0;
function newSticky() {
    // CREATE DIV
    var div = document.createElement("div");
    var ul = document.getElementById('parent');
    ul.appendChild(div);

    // CREATE TXTAREA 1
    var text = document.createElement("textarea");
    text.id = "closehierna";
    text.onblur = saveAll;        // add eventhandler
    div.appendChild(text).focus();

    // ADD CLOSE IMG
    var close = document.createElement("img");
    close.id = "close" + globTeller++;
    close.src = "images/close.png";
    close.onclick = deleteSticky;     // add eventhandler
    div.appendChild(close);

    // CREATE TXTAREA 2
    var text2 = document.createElement("textarea");
    text2.onblur = saveAll;
    div.appendChild(text2);
}

//------------------------------------------------------------------------------
function deleteSticky(e) {
    var kruisje = e.target;
    var parentNode = kruisje.parentNode;
    parentNode.remove();
}
//------------------------------------------------------------------------------

function Sticky(titel, text) {
    this.titel = titel;
    this.text = text;
}

let stickyArray = [];

function saveAll() {
    stickyArray = [];
    var divs = document.getElementsByTagName("div");
    for (let i = 0; i < divs.length; i++) {
        var textareas = divs[i].getElementsByTagName('textarea');
        var titel = textareas[0].value;
        var text = textareas[1].value;
        var newSticky = new Sticky(titel, text);
        stickyArray.push(newSticky);
    }
    console.log("dit moet in storage:", stickyArray);
    saveStickyNotes()
}

//------------------------------------------------------------------------------

function saveStickyNotes() {
    localStorage.setItem('stickynotes', JSON.stringify(stickyArray)); //save storage
}

//------------------------------------------------------------------------------

function stickyStorageCheck() {
    if (localStorage.stickynotes) {
        let getStickies = JSON.parse(localStorage.stickynotes);
        for (let i = 0; i < getStickies.length; i++) {
            let stickyObj = getStickies[i];
            let title = stickyObj.titel;
            let body = stickyObj.text;
            oldSticky(title, body);
        }

    } else {
        alert("Nothing to reload!");
    }
}

//------------------------------------------------------------------------------

let globTel = 0;
function oldSticky(title, body) {
    // CREATE DIV
    var div = document.createElement("div");
    var ul = document.getElementById('parent');
    ul.appendChild(div);

    // CREATE TXTAREA 1
    var text = document.createElement("textarea");
    text.id = "closehierna";
    text.value = title; // add saved value
    text.onblur = saveAll;
   // div.appendChild(text).focus();     / / error met focus aan elk te geevn wnr je enkel einde nodig 
    div.appendChild(text);

    // ADD CLOSE IMG
    var close = document.createElement("img");
    close.id = "close" + globTel++;
    close.src = "images/close.png";
    close.onclick = deleteSticky;
    div.appendChild(close);

    // CREATE TXTAREA 2
    var text2 = document.createElement("textarea");
    text2.value = body; // add saved value
    text2.onblur = saveAll;
    div.appendChild(text2);

    var divs = document.getElementsByTagName("div");
    if (divs.length > 0){
        divs[divs.length-1].getElementsByTagName("textarea")[0].focus(); // pas op het einde toevoegen !
    }
}