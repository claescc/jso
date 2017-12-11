'use strict';

function loadXMLDoc(filename) {
    var  xhttp = new XMLHttpRequest();
    xhttp.open("GET", filename, false);   // synchroon request 
    xhttp.send();
    return xhttp.responseXML;
}

function loadXMLText(filename) {
    var  xhttp = new XMLHttpRequest();
    xhttp.open("GET", filename, false);   // synchroon request 
    xhttp.send();
    return xhttp.responseText; /// terug als een string niet een Domtree
    
}