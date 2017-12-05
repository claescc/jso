'use strict'

function init() {
    document.getElementById("newstick").onclick = newSticky;
}

window.onload = init;
let globTeller =0;

/*
window.onbeforeunload = saveStickyNotes;
function saveStickyNotes(){
    document
    localStorage.setItem('sticky', globshape); //save storage
}
*/
function Sticky(){

}

function newSticky() {
    let sticky = new Sticky()
    var div = document.createElement("div");
    var ul = document.getElementById('parent');
    ul.appendChild(div);
    var text = document.createElement("textarea");
    text.id = "closehierna";
    div.appendChild(text).focus();
    // ADD CLOSE IMG
    var close = document.createElement("img");
    close.id = "close"+globTeller++;
    close.src = "images/close.png";
    close.onclick = deleteSticky;
    div.appendChild(close);
    // ADD TEXTFIELD
    var text2 = document.createElement("textarea");
    div.appendChild(text2);
}

function deleteSticky(e) {
    var kruisje = e.target;
    var parentNode = kruisje.parentNode;
    parentNode.remove();
}
