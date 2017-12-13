'use strict';
function init(){
    getSales();
}


window.onload = init;



function getSales(){ // DIT IS AJAX
let request = new XMLHttpRequest();                     // 1
let url = "http://gumball.wickedlysmart.com";                     
//let url = "sales.json";                                 // 2
//request.open("GET", url);     // 3
request.onreadystatechange = function(){                // 3
    if(this.readyState == 4  && this.status == 200){
        displaySales(request.responseText);              // 4    FUNCTIE als alles OK !
    }
}
request.open("GET", url);                                // 5
request.send();                                          // 6

}

/*
function Gumball(name, sales){
    this.name = name;
    this.sales = sales;
}*/

function displaySales(req){     // wat doen we met de REQUEST
    var div = document.getElementById("sales");
    let requ = JSON.parse(req);
    let nameSales = [];
    let names, sales, divNew;
// DOORLOOP ARRAY MET OBJECTEN
    for (let i = 0; i <requ.length; i++){
       names = requ[i].name;
       sales = requ[i].sales;

       // CREATE NEW DOM TREE
    divNew = document.createElement('div');
    divNew.innerHTML = names + " sold  "+sales + " gumballs";
  //  divNew.id = "sales";
    divNew.setAttribute("class","saleItem");
    div.appendChild(divNew);
     // nameSales[i] = new Gumball(name, sales);
    }

	//div.innerHTML = nameSales;
}
