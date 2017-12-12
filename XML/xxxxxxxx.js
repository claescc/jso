'use strict';

var xmlDoc;
var elements = [];

window.onload = function () {
    loadXMLDoc("XML-bestanden/allelements.xml", xmlDocReady); // Load xml assync
}

// triggers when xml is loaded
function xmlDocReady(xml) {
    xmlDoc = xml.responseXML;
    initQuiz();
}

function initQuiz() {
    // initialize array with elements from xml document
    initElements();

    // configure event handler for the onclick event of the answer button on screen
    document.getElementById("btnAnswer").addEventListener("click", btnAnswerClicked);
}

function initElements() {
    var numberOfElements = xmlDoc.documentElement.children.length; // get number of ATOM elements

    var rand, name, symbol;
    var iteratorCounter = 0;

    // fill the elements array with 10 Element objects based on 10 random atom elements from the xml file
    for (var i = 0; i < 10; i++) {
        rand = Math.floor(Math.random() * numberOfElements);
        name = xmlDoc.getElementsByTagName("NAME")[rand];
        symbol = xmlDoc.getElementsByTagName("SYMBOL")[rand];
        elements[i] = new Element(rand, name.textContent, symbol.textContent);
    }

    // display first element name to the quizzer
    document.getElementById("display").innerText = elements[0].name;
}

function btnAnswerClicked() {
    
}

/** Element Function Constructor */
function Element(id, name, symbol) {
    this.id = id;
    this.name = name;
    this.symbol = symbol;
}

function loadXMLDoc(filename, callBackXmlDocReady) {
    var xhttp;
    if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } else {
        xhttp = new XMLHttpRequest();
    }

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callBackXmlDocReady(this);
        }
    };
    xhttp.open("GET", filename, true);
    try {
        xhttp.responseType = "msxml-document";
    } catch (err) {} // Helping IE11
    xhttp.send("");
}