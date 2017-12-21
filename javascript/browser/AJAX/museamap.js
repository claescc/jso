'use strict'
function init() {
    antwerpenXML();
    //getAntCoords();
    brusselXML();
    titelBalk();        // create title table


    let btnR = frm.refresh;
    let btnV = frm.vorig;
    let btnN = frm.volgend;
    //btnR.onclick = refreshen;
}
window.addEventListener('load', init);

//--------------------------- XML DATA OPHALEN --------------------------------------
function antwerpenXML() {
    let url = "http://datasets.antwerpen.be/v4/gis/museumoverzicht.xml";
    fetch(url).then(function (response) {
        return response.text(); // enkel xml of txt
    }).then(function (responseText) {
        getMuseumsAnt(responseText);
        getAntCoords();
    });
}

function brusselXML() {
    let url = "http://opendata.brussel.be/api/records/1.0/search/?dataset=musea-in-brussel";
    fetch(url).then(function (response) {
        return response.text(); // enkel xml of txt
    }).then(function (responseText) {
        getMuseumsBru(responseText);
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
        let newloc = new ANTmuseum(lat, lng);
        globalAnt[i] = newloc;
        let naam = recordsArr[i].getElementsByTagName('naam')[0].textContent;
        let straat = recordsArr[i].getElementsByTagName('straat')[0].textContent;
        let nr = recordsArr[i].getElementsByTagName('huisnummer')[0].textContent;
        let post = recordsArr[i].getElementsByTagName('postcode')[0].textContent;
        let adres = straat + " " + nr;
        createDomTree(stad, naam, adres);
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
        let newloc = new BRUmuseum(lat, lng);
        globalBru[i] = newloc;
        let naam = recordsArr[i].fields.naam_van_het_museum;
        let adres  = recordsArr[i].fields.adres;
        createDomTree(stad, naam, adres);
    }
}
//--------------------------- OBJECT LOCATIES MAKEN --------------------------------------

function ANTmuseum(lat, long){
    this.lat = lat;
    this.long = long;
}
function BRUmuseum(lat, long){
    this.lat = lat;
    this.long = long;
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


/*
function leegMaken() {
    // ZOEKEN DELETE VORIGE BOOM
    let tabel = document.getElementById("ereTabel");
    let allRows = tabel.getElementsByTagName("tr");
    let length = allRows.length;
    for (let i = 1; i < length; i++) {
        let rij = allRows[1];
        tabel.removeChild(rij);
    }
}
*/
//--------------------------- MAP MAKEN --------------------------------------



