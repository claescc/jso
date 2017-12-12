'use strict';
const FILENAME = "XML-bestanden/allelements.xml";
let elementsAll = []; // array for Objects
let punten = 0; // hou de punten bij van elk spel ! 
let play10 = [];
let teller = 1; // TELLER TERUG NAAR 10 ZETTEN !!! 

function Element(name, symbol){ // create object
    this.name = name;
    this.symbol = symbol;   
}

function Topscore(name, score){
    this.name = name;
    this.score = score;  
}

/*
function loadStorageScores(){ // load previous scores
    if (localStorage.topPlayers) {
        let getPlayers = JSON.parse(localStorage.topPlayers);
        for (let i = 0; i < getPlayers.length; i++) {
            let playerObj = getPlayers[i];
            let name = playerObj.name;
            let score = playerObj.score;
          //  showOldscores(name, score);
        }

    } else {
        alert("Nothing to reload!");
    }
} */

// onload get all names and symbols out of the XML 
function loadElements() { 
    let doc = loadXMLDoc(FILENAME);
    let atoms = doc.getElementsByTagName("ATOM"); 
    for (var i = 0;i < atoms.length; i++){ // all atoms loop to get each name and symbol
        let name = atoms[i].getElementsByTagName('NAME')[0].textContent;
        let symbol = atoms[i].getElementsByTagName('SYMBOL')[0].textContent;
        elementsAll[i] = new Element(name, symbol); // array filled up with objects name+symbol
    }
}


function get10toPlay(){
    let name, symbol;
    for (var i = 0;i < 10; i++){
        let rand = Math.floor(Math.random() * 112); // 112 = all elements of the periodic table
        play10[i] = elementsAll[rand]; // place 10 random name+symbol in new array 
    }
}

function startGame(){
  //  setTimer(tikTok, 1000);
    getNext();
    document.getElementById("end1").disabled = true;
}


function getNext(){
    let name = play10[teller].name;
    frm.element.value = name;
}


function guessElement(e){ 
    // startTijd = Date.now();
    if (e.keyCode == 13){ // 13 is ENTER toets!
        let myGuess = frm.afkorting.value;
        let symbol = play10[teller].symbol;
        let response = "";
        if (myGuess == symbol){
            frm.afkorting.value = "";
            frm.element.value = "";
            response = "Correct: "+myGuess;
            punten++;
        }else {
            frm.afkorting.value = "";
            frm.element.value = "";
            response = myGuess+ " wrong !!\n \n Correct answer: "+symbol;
        }
        let feedback = document.getElementById("feedback");
        feedback.innerText = response;
        teller--;
    
        if (teller == -1){
            gameOver();
        } else{
            getNext();
        }
    } 
    
 }

 function tikTok(){

 }

function gameOver(){
    //get time from timer
    let playerName = frm.speler.value;
    let score = punten;
    
    //storeTopscore(playerName, score);
    createScoreTable(playerName, score);
   
}

function storeTopscore(name, score){
    let player = new Topscore(name, score);
    localStorage.setItem('topPlayers', JSON.stringify(player)); //save storage
}

function createScoreTable(name, score){
    // CREATE NEW <TR> 
    let scorebord = document.getElementById("scorebord"); // TR
    let tr = document.createElement('tr');
    scorebord.parentNode.appendChild(tr);

    // CREATE NEW <TD> 
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    td1.innerText= name;
    td2.innerText= score;
    tr.appendChild(td1);
    tr.appendChild(td2);

}

function init() {
 //   loadStorageScores();
    loadElements();
    get10toPlay();
    let btnP = frm.playbtn;
    btnP.onclick = startGame;
    frm.afkorting.onkeydown = guessElement;
 
}

window.onload = init;