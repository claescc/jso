'use strict';

window.onload = function () {
	var button = document.getElementById("previewButton");
	button.onclick = previewHandler;
	
	var btnS = document.getElementById("savebtn");
	btnS.onclick = saveHandler;
	
	var btnR = document.getElementById("reloadbtn");
	btnR.onclick = reloadHandler;
	// Easter Egg ;-)
	makeImage();
}

//************************************RELOAD*************************************************** */
function reloadHandler(){ 
	if (localStorage.background) {
		let canvas = document.getElementById("tshirtCanvas");
		let context = canvas.getContext("2d");
		fillBackgroundColor2(canvas, context);
		var shape = localStorage.shape;
		if (shape == "squares") {
			for (var squares = 0; squares < 20; squares++) {
				x = localStorage.w;
				drawSquare2(canvas, context);
			}
		}
		else if (shape == "circles") {
			for (var circles = 0; circles < 20; circles++) {
				drawCircle2(canvas, context);
			}
		}
		drawText2(canvas, context);
		drawBird(canvas, context);
    }else {
		alert("Nothing to reload!");
	}
}

// This is where we'll set the background color
function fillBackgroundColor2(canvas, context) {
	let bg = localStorage.background;
	context.fillStyle = bg;
	context.fillRect(0, 0, canvas.width, canvas.height);

}

// Draws a square at a random location
function drawSquare2(canvas, context) {
	var w = localStorage.w;
	var x = localStorage.x;
	var y = localStorage.y;
	let color = localStorage.objcolor;
	context.fillStyle = color;
	context.fillRect(x, y, w, w);
}

// Draws a circle at a random location
function drawCircle2(canvas, context) {
	var radius = localStorage.radius;
	var x = localStorage.x;
	var y = localStorage.y;
	context.beginPath();
	context.arc(x, y, radius, 0, degreesToRadians(360), true);
	let color = localStorage.objcolor;
	context.fillStyle = color;
	context.fill();
}
// draws all the text, including the tweet
function drawText2(canvas, context) {
	let colortxt = localStorage.txtcolor;
	context.fillStyle = colortxt;
	context.font = "bold 1em sans-serif";
	context.textAlign = "left";
	context.fillText("I saw this tweet", 20, 40);
	var selectObj = document.getElementById("tweets");
	var index = selectObj.selectedIndex;
	var tweet = selectObj[index].value;
	var size = localStorage.fontsize;
	size += "px";
	context.font = "italic " + size + " serif";
	context.textAlign = "center";
	context.fillText(tweet, Math.floor(canvas.width / 2), 100);		// canvas groote 602x202
	context.font = "bold 1em sans-serif";
	context.textAlign = "right";
	context.fillText("and all I got was this lousy t-shirt!",
	canvas.width - 20, canvas.height - 40);
}


//************************************SAVE***************************************************** */
var globshape, globbg, globobjcolor,globtext, globsize;
var globalx = [];
var globaly = [];
var globalw = [];
var globalradius = [];
function saveHandler(){ 
	localStorage.setItem('shape', globshape); //save storage
	localStorage.setItem('background', globbg); //save storage
	localStorage.setItem('objcolor', globobjcolor); //save storage
	localStorage.setItem('txtcolor', globtext); //save storage
	localStorage.setItem('fontsize', globsize); //save storage
	// hier loopt het fout
/*	localStorage.setItem('x', globalx); //save storage
	localStorage.setItem('y', globaly); //save storage
	localStorage.setItem('w', globalw); //save storage
	localStorage.setItem('radius', globalradius); //save storage
*/
/*
	localStorage.setItem('shape', shape); 
	localStorage.setItem('background', bgColor); 
	localStorage.setItem('objcolor', color);
	localStorage.setItem('txtcolor', colortxt);
	localStorage.setItem('fontsize', size);  */
}
//****************************************************************************************** */
function previewHandler() {
	// fontSize();
	var canvas = document.getElementById("tshirtCanvas");
	var context = canvas.getContext("2d");
	// there's no 3D canvas yet; this is to make code futureproof

	fillBackgroundColor(canvas, context);
	var selectObj = document.getElementById("shape");
	var index = selectObj.selectedIndex;
	var shape = selectObj[index].value;
	globshape = shape;
//	localStorage.setItem('shape', shape); //save storage
	if (shape == "squares") {
		for (var squares = 0; squares < 20; squares++) {
			drawSquare(canvas, context);
		}
	}
	else if (shape == "circles") {
		for (var circles = 0; circles < 20; circles++) {
			drawCircle(canvas, context);
		}
	}
	drawText(canvas, context);
	drawBird(canvas, context);
}

// This is where we'll set the background color
function fillBackgroundColor(canvas, context) {
	let bgColor = frm.colorbg.value;
	globbg = bgColor;
//	localStorage.setItem('background', bgColor); //save storage
	context.fillStyle = bgColor;
	context.fillRect(0, 0, canvas.width, canvas.height);

}



// Draws a square at a random location
function drawSquare(canvas, context) {
	let w = Math.floor(Math.random() * 40);
	let x = Math.floor(Math.random() * canvas.width);
	let y = Math.floor(Math.random() * canvas.height);
	//globalw = globalw.push(w);
	//globalx = globalx.push(x);
	//globaly = globaly.push(y);
	// Use this fillStyle instead if you want to try
	// "twitter blue"
	//context.fillStyle = "rgb(0, 173, 239)";
	let color = frm.color.value;
	globobjcolor = color;
//	localStorage.setItem('objcolor', color);
	context.fillStyle = color;
	context.fillRect(x, y, w, w);
}

// Draws a circle at a random location
function drawCircle(canvas, context) {
	var radius = Math.floor(Math.random() * 40);
	var x = Math.floor(Math.random() * canvas.width);
	var y = Math.floor(Math.random() * canvas.height);
//	globalradius = globalradius.push(radius);
//	globalx = globalx.push(x);
//	globaly = globaly.push(y);
	context.beginPath();
	context.arc(x, y, radius, 0, degreesToRadians(360), true);

	// Use this fillStyle instead if you want to try
	// "twitter blue"
	//context.fillStyle = "rgb(0, 173, 239)";
	let color = frm.color.value;
	globobjcolor = color;
//	localStorage.setItem('objcolor', color);
	context.fillStyle = color;
	context.fill();
}

// draws all the text, including the tweet
function drawText(canvas, context) {
	let colortxt = frm.colortxt.value;
	//localStorage.setItem('txtcolor', colortxt);
	globtext = colortxt;
	context.fillStyle = colortxt;
	context.font = "bold 1em sans-serif";
	context.textAlign = "left";
	context.fillText("I saw this tweet", 20, 40);

	// draw the tweet!

	var selectObj = document.getElementById("tweets");
	var index = selectObj.selectedIndex;
	var tweet = selectObj[index].value;
	// set FONT SIZE
	var size = frm.fontSize.value;
	globsize = size;
//	localStorage.setItem('fontsize', size);
	size += "px";
	context.font = "italic " + size + " serif";
	context.textAlign = "center";
	context.fillText(tweet, Math.floor(canvas.width / 2), 100);		// canvas groote 602x202
	//context.fillText(tweet, Math.floor(canvas.width/2), 100);		// canvas groote 602x202

	// If you want to try splitIntoLines to 
	// handle longer tweets, uncomment this code
	// and replace the context.fillText line above
	/*
		if (tweet.length > 60) {
			var tweetLines = splitIntoLines(tweet);
			for (var i = 0; i < tweetLines.length; i++) {
				context.fillText(tweetLines[i], 30, 70+(i*25));
			}
		}
		else {
			context.fillText(tweet, 30, 100);
		}
	*/

	context.font = "bold 1em sans-serif";
	context.textAlign = "right";
	context.fillText("and all I got was this lousy t-shirt!",
	canvas.width - 20, canvas.height - 40);
}



// draws the twitter bird image
function drawBird(canvas, context) {
	var twitterBird = new Image();
	twitterBird.src = "images/twitterBird.png";
	// images don't always load immediatly, so we make sure the image is fully loaded before we draw it:
	twitterBird.onload = function () {
		context.drawImage(twitterBird, 20, 120, 70, 70);
	};

}

function degreesToRadians(degrees) {
	return (degrees * Math.PI) / 180;
}


function updateTweets(tweets) {
	var tweetsSelection = document.getElementById("tweets");

	// add all tweets to the tweets menu
	for (var i = 0; i < tweets.length; i++) {
		var tweet = tweets[i];

		// create option
		var option = document.createElement("option");
		option.text = tweet.text;

		// strip any quotes out of the tweet so they don't mess up our option
		option.value = tweet.text.replace("\"", "'");

		// add option to select
		tweetsSelection.options.add(option);
	}
	// make sure the top tweet is selected
	tweetsSelection.selectedIndex = 0;
}


// Splits one long string into multiple lines of 
// no more than 60 characters each. Returns an
// array of the lines.
function splitIntoLines(str) {
	var strs = new Array();
	var space = str.indexOf(' ', 60);
	strs[0] = str.substring(0, space);
	strs[1] = str.substring(space + 1);
	if (strs[1].length > 60) {
		space = strs[1].indexOf(' ', 60);
		strs[1] = strs[1].substring(space + 1);
		strs[2] = strs[1].substring(0, space);
	}
	return strs;
}

// Easter Egg
function makeImage() {
	var canvas = document.getElementById("tshirtCanvas");
	canvas.onclick = function () {
		window.open(canvas.toDataURL('image/png'), '_blank');
	};
}