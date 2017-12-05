'use strict'

function init() {
    document.getElementById("newstick").onclick = newSticky;
}

window.onload = init;
let globTeller =0;


function newSticky() {
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

//document.getElementsByTagName('img').onclick = deleteSticky;
function deleteSticky(e) {
    var kruisje = e.target;
    var parentNode = kruisje.parentNode;
    parentNode.remove();
}
