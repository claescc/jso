'use strict'
let globRowz, globRecords, globq;

function init() {
    titelBalk();
    dataOphalen("");

    //  let tag = document.getElementById('tag');
    // tag.onclick = doeIets;

    let btn = frm.zoeken;
    btn.onclick = function () {
        let str = document.getElementById("zoekbalk").value;
        let rowz = document.getElementById("rijenbalk").value;
        dataOphalen(str, rowz);
    };
    // paginaNummers();
}
window.onload = init;

// HEEL DE TABEL OPHALEN onload
function dataOphalen(q, rowz) {
    if (rowz == undefined) {         //LADEN PAGINA rowz = undefined
        rowz = 5;
    }
    globRowz = rowz;
    globq = q;
    let url = "https://opendata.brussel.be/api/records/1.0/search/?dataset=ereburgers1&rows=" + rowz +
        "&q=" + q;
    fetch(url).then(function (response) {
        return response.text(); // enkel xml of txt
    }).then(function (responseText) {
        getEreburger(responseText);
    });
}

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

// UIT RESPONSE DE DATA HALEN
function getEreburger(stringResp) {
    leegMaken();
    let objEre = JSON.parse(stringResp);
    globRecords = objEre.nhits; // 33
    let recordsArr = objEre.records;
    for (let i = 0; i < recordsArr.length; i++) {
        let nom = recordsArr[i].fields.nom;
        let func = recordsArr[i].fields.function;
        let datum = recordsArr[i].fields.date;
        // DATUM EUROPEES MAKEN
        let d = datum.substr(0,2);
        let m = datum.substr(5,2);
        let j = datum.substr(0,4);
        datum = d + " . " + m + " . " + j;
        createDomTree(nom, func, datum);
    }
    paginaNummers();
}

function titelBalk() {
    // TABEL HOOFD TITEL BALK
    let div = document.getElementById('result');
    let tabel = document.createElement('table');
    let tr = document.createElement('tr');
    let cella = document.createElement('td');
    let cellb = document.createElement('td');
    let cellc = document.createElement('td');
    tabel.id = "ereTabel";
    cella.innerText = "NAAM";
    cellb.innerText = "FUNCTIE";
    cellc.innerText = "DATUM";
    div.appendChild(tabel);
    tabel.appendChild(tr);
    tr.appendChild(cella);
    tr.appendChild(cellb);
    tr.appendChild(cellc);
}

// MET DATA DE VOLLEDIGE TABEL DOM TREE MAKEN
function createDomTree(nom, func, datum) {
    let tabel = document.getElementById("ereTabel");
    // TABEL DATA EREBURGERS
    let row = document.createElement('tr');
    let cell1 = document.createElement('td');
    let cell2 = document.createElement('td');
    let cell3 = document.createElement('td');
    cell1.innerText = nom;
    cell2.innerText = func;
    cell3.innerText = datum;
    tabel.appendChild(row);
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
}

//---------------------------PAGINA NUMMERS--------------------------------------

// PAGINA NUMMERS
function paginaNummers() {
    deletePaginas()
    let paginas = Math.ceil(globRecords / globRowz);
    let divP = document.getElementById('paginas');
    //LOOP CREATE PAGINAS
    for (let i = 1; i <= paginas; i++) {
        //  let tag = p + i;
        let tag = document.createElement('a');
        tag.innerHTML = i;
        tag.addEventListener("click", function (e) {
            e.preventDefault();
            let url = e.target.href;
            fetch(url).then(function (response) {
                return response.text(); // enkel xml of txt
            }).then(function (responseText) {
                getEreburger(responseText);
            });
        });
        // NEW URL CREATE ! 
        let q = globq;
        let rowz = globRowz;
        let start = (i-1)*rowz;
        let urlNew = "https://opendata.brussel.be/api/records/1.0/search/?dataset=ereburgers1&rows=" + rowz + "&q=" + q + "&start=" + start;



        tag.setAttribute("href", urlNew);  // reloads entire page
        divP.appendChild(tag);

    }
}

function deletePaginas() {
    let divP = document.getElementById('paginas');
    divP.innerHTML = "";
}


