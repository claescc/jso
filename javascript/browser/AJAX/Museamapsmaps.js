'use strict';

window.addEventListener('load', createMaps);

function createMaps() {
	createMapA();
	createMapB();
}

//--------------------------GET COORDS-----------------------------------------
function getAntCoords() {
	for (let i = 0; i < globalAnt.length; i++) {
		// GLOBAL OPROEPEN VAN ANDER LOCATIE
		var latlong = new google.maps.LatLng(globalAnt[i].lat, globalAnt[i].long);
		let naamA = globalAnt[i].naam;
		createMarkersA(latlong, naamA);
	}
}
function getBruCoords() {
	// GLOBAL OPROEPEN VAN ANDER LOCATIE
	for (let i = 0; i < globalBru.length; i++) {
		var latlong = new google.maps.LatLng(globalBru[i].lat, globalBru[i].long);
		let naamB = globalAnt[i].naam;
		createMarkersB(latlong, naamB);
	}
}
//--------------------------CREATE MAP -----------------------------------------
let mapA = null;
let mapB = null;
function createMapA() {
	var antwerpen = { lat: 51.260197, lng: 4.402771 };
	mapA = new google.maps.Map(document.getElementById('antwerpen'), {
		zoom: 10,
		center: antwerpen
	});
}

function createMapB() {
	var brussel = { lat: 50.85045, lng: 4.34878 };
	mapB = new google.maps.Map(document.getElementById('brussel'), {
		zoom: 10,
		center: brussel
	});
}


//--------------------------CREATE MARKERS -----------------------------------------

function createMarkersA(latlong, naamA) {
	var marker = new google.maps.Marker({
		position: latlong,
		map: mapA,
		title: naamA
	});
}

function createMarkersB(latlong, naamB) {
	var marker = new google.maps.Marker({
		position: latlong,
		map: mapB,
		title: naamB
	});
}
