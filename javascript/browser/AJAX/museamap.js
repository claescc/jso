'use strict'
function init() {
    antwerpenXML();
    brusselXML();
    titelBalk();        // create title table
    btnDisable()


    let btnR = frm.refresh;
    let btnV = frm.vorig;
    let btnN = frm.volgend;
    btnR.onclick = refreshe;
    btnV.onclick = back;
    btnN.onclick = next;
}
window.addEventListener('load', init);


//--------------------------- XML DATA OPHALEN --------------------------------------
let aantalAntwoorden = 0;
function antwerpenXML() {
    let url = "http://datasets.antwerpen.be/v4/gis/museumoverzicht.xml";
    fetch(url).then(function (response) {
        return response.text(); // enkel xml of txt
    }).then(function (responseText) {
        getMuseumsAnt(responseText);
        getAntCoords();
        aantalAntwoorden++;
        if (aantalAntwoorden == 2) {
            createMuseumArray();
            rowSelector();
        }
    });
}

function brusselXML() {
    let url = "http://opendata.brussel.be/api/records/1.0/search/?dataset=musea-in-brussel";
    fetch(url).then(function (response) {
        return response.text(); // enkel xml of txt
    }).then(function (responseText) {
        getMuseumsBru(responseText);
        getBruCoords();
        aantalAntwoorden++;
        if (aantalAntwoorden == 2) {
            createMuseumArray();
            rowSelector();
        }
    });

}


let globalAnt = [];
function getMuseumsAnt(xml) {
    let stad = "Antwerpen";
    var parser = new DOMParser();
    var xmldoc = parser.parseFromString(xml, "application/xml");
    let recordsArr = xmldoc.getElementsByTagName('record'); //44
    // LOOP DOOR ALLE RECORS VOOR DATA
    for (let i = 0; i < recordsArr.length; i++) {
        let lat = recordsArr[i].getElementsByTagName('point_lat')[0].textContent;
        let lng = recordsArr[i].getElementsByTagName('point_lng')[0].textContent;
        let naam = recordsArr[i].getElementsByTagName('naam')[0].textContent;
        let newloc = new ANTmuseum(lat, lng, naam);
        globalAnt[i] = newloc;
        let straat = recordsArr[i].getElementsByTagName('straat')[0].textContent;
        let nr = recordsArr[i].getElementsByTagName('huisnummer')[0].textContent;
        let post = recordsArr[i].getElementsByTagName('postcode')[0].textContent;
        let adres = straat + " " + nr;
        createDomTree(stad, naam, adres);
        // CREATE 1 ARRAY 
        let newMuseum = new Museum(stad, naam, adres, lat, lng);
        museumA[i] = newMuseum;
    }
}

let globalBru = [];
function getMuseumsBru(json) {
    let stad = "Brussel";
    let objEre = JSON.parse(json);
    let recordsArr = objEre.records;
    for (let i = 0; i < recordsArr.length; i++) {
        let lat = recordsArr[i].fields.latitude_breedtegraad;
        let lng = recordsArr[i].fields.longitude_lengtegraad;
        let naam = recordsArr[i].fields.naam_van_het_museum;
        let newloc = new BRUmuseum(lat, lng, naam);
        globalBru[i] = newloc;
        let adres = recordsArr[i].fields.adres;
        createDomTree(stad, naam, adres);
        // CREATE 1 ARRAY 
        let newMuseum = new Museum(stad, naam, adres, lat, lng);
        museumB[i] = newMuseum;
    }
}
//--------------------------- OBJECT LOCATIES MAKEN --------------------------------------

function ANTmuseum(lat, long, naam) {
    this.lat = lat;
    this.long = long;
    this.naam = naam;
}
function BRUmuseum(lat, long, naam) {
    this.lat = lat;
    this.long = long;
    this.naam = naam;
}

// GEVULD BIJ OPHALING DATA
let museumA = [];
let museumB = [];

function Museum(stad, naam, adres, lat, long) {
    this.stad = stad;
    this.naam = naam;
    this.adres = adres;
    this.lat = lat;
    this.long = long;
}
let allMusea = [];
function createMuseumArray() {
    // push B into A 
    allMusea = [];
    for (let i = 0; i < museumA.length; i++) {
        allMusea.push(museumA[i]);
    }
    // push B into A 
    for (let i = 0; i < museumB.length; i++) {
        allMusea.push(museumB[i]);
    }
}

//--------------------------- TABEL MAKEN --------------------------------------
function titelBalk() {
    // TABEL HOOFD TITEL BALK
    let div = document.getElementById('result');
    let tabel = document.createElement('table');
    let tr = document.createElement('tr');
    let cella = document.createElement('td');
    let cellb = document.createElement('td');
    let cellc = document.createElement('td');
    tabel.id = "museums";
    cella.innerText = "STAD";
    cellb.innerText = "MUSEUM";
    cellc.innerText = "ADRES";
    div.appendChild(tabel);
    tabel.appendChild(tr);
    tr.appendChild(cella);
    tr.appendChild(cellb);
    tr.appendChild(cellc);
}

// MET DATA DE VOLLEDIGE TABEL DOM TREE MAKEN
function createDomTree(stad, naam, adres) {
    let tabel = document.getElementById("museums");
    // TABEL DATA MUSEUMS
    let row = document.createElement('tr');
    let cell1 = document.createElement('td');
    let cell2 = document.createElement('td');
    let cell3 = document.createElement('td');
    cell1.innerText = stad;
    cell2.innerText = naam;
    cell3.innerText = adres;
    tabel.appendChild(row);
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
}

//--------------------------- ROWS SELECT - BUTTONS --------------------------------------
let upDown = 0;
function rowSelector(){
    let row = document.getElementsByTagName('tr');
        upDown = 1;
        row[upDown].style.backgroundColor = "lightgreen";
    
}

function refreshe(){
    rowSelector();
}

function next(){
    document.getElementById("back").disabled = false;
    document.getElementsByTagName('tr')[upDown].removeAttribute("style")
    upDown++;
    let row = document.getElementsByTagName('tr');
    row[upDown].style.backgroundColor = "lightgreen";
}


function back(){
    if (upDown <= 1){
       btnDisable();
      
    }else {
        document.getElementsByTagName('tr')[upDown].removeAttribute("style")
        upDown--;
        let row = document.getElementsByTagName('tr');
        row[upDown].style.backgroundColor = "lightgreen";
    }
  
}
function btnDisable(){
    document.getElementById("back").disabled = true;
}
