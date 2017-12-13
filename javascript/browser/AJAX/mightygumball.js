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
/*
 * get the content of a JSON file using Ajax 
 */

window.onload = init;

function init() {
	getSales();
}

//
// This function is written using XMLHttpRequest Level 1, so if you're
// using IE or Opera, or a really old version of Safari, Firefox or
// Chrome, you can use this instead of Level 2 (below).
//
function getSales_XHRv1() {
	// change the URL to match the location where you
	// put the sales.json file
	 var url = "sales.json";  // ok als je file via webserver opvraagt (niet ok als je file opent in browser)
	//var url = "http://gumball.wickedlysmart.com";  // niet ok (cross domain request)
	var request = new XMLHttpRequest();
	request.open("GET", url);
	request.onreadystatechange = function() {
		if (request.readyState == 4 && request.status == 200) {
			updateSales(request.responseText);
		}
	};
	request.send();
}

//
// With XMLHttpRequest Level 2 (implemented in new versions of Firefox, Safari
// and Chrome) you can check progress and check for the "load" event with the
// onload event handler instead of checking the onreadystatechange
//
function getSales() {
	// change the URL to match the location where you
	// put the sales.json file
	 var url = "sales.json";  // ok als je file via webserver opvraagt (niet ok als je file opent in browser)
	//var url = "http://gumball.wickedlysmart.com";  // niet ok (cross domain request)
	var request = new XMLHttpRequest();
	request.open("GET", url);
	request.onload = function() {
		if (request.status == 200) {
			updateSales(request.responseText);
		}
	};
	request.send();
}

function updateSales(responseText) {
	var salesDiv = document.getElementById("sales");
	var sales = JSON.parse(responseText);
	for (var i = 0; i < sales.length; i++) {
		var sale = sales[i];
		var div = document.createElement("div");
		div.setAttribute("class", "saleItem");
		div.innerHTML = sale.name + " sold " + sale.sales + " gumballs";
		salesDiv.appendChild(div);
	}
}

