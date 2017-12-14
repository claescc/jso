window.onload = function() {
	if (Worker == "undefined") { // oude html create new html5
		document.getElementById("output").innerHTML = "Bummer, no Web Workers";
	}
	else {
		var worker = new Worker("worker.js"); // bestand wat worker doet 

		worker.postMessage("ping"); // feed a variable except function

		worker.onmessage = function(event) { // als klaar met zijn taak geeft antwoord 
			var message = "Worker says " + event.data; // neem data van x.data
			document.getElementById("output").innerHTML = message;
		}
		worker.onerror = function(error) { // als er iets fout loopt
			document.getElementById("output").innerHTML = 
				"There was an error in " + error.filename + // x.filename x.lineno x.message
				" at line number " + error.lineno +
				": " + error.message;
		};
	}
}



/*
// exercise 1
window.onload = function() {
	var worker = new Worker("worker.js");
	worker.onmessage = function(event) {
		alert("Worker says " + event.data);
	}
	for (var i = 0; i < 5; i++) {
		worker.postMessage("ping");
	}
}

// exercise 2
window.onload = function() {
	var worker = new Worker("worker.js");
	worker.onmessage = function(event) {
		alert("Worker says " + event.data);
	}

	for (var i = 5; i > 0; i--) {
		worker.postMessage("pong");
	}
}

// exercise 3
// Careful with this one! 
window.onload = function() {
	var worker = new Worker("worker.js");
	worker.onmessage = function(event) {
		alert("Worker says " + event.data);
		worker.postMessage("ping");
	}
	worker.postMessage("ping");
}

// exercise 4
// Be a little careful with this one
window.onload = function() {
	var worker = new Worker("worker.js");
	worker.onmessage = function(event) {
		alert("Worker says " + event.data);
	}

	setInterval(pinger, 1000);
	
	function pinger() {
		worker.postMessage("ping");
	}
}
// exercise... bonus!
window.onload = function() {
	var numWorkers = 3;
	var workers = [];
	for (var i = 0; i < numWorkers; i++) {
		var worker = new Worker("worker.js");
		worker.onmessage = function(event) {
			alert(event.target + " says " + event.data);
		};
		workers.push(worker);
	}
	for (var i = 0; i < workers.length; i++) {
		workers[i].postMessage("ping");
	}
}

*/