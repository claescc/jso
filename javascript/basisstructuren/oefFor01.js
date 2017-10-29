'use strict';

var recipient = "bottle";
var startAantal = 9;
var inhoud = "beer";
var tmp;				// variable voor letter s plurial
for (var aantal = startAantal; aantal > 0; aantal--) {
	/*
	if (aantal > 1) {		// als bottle meer dan 1 is komt s erbij
		tmp = "s";
	}
	else {
		tmp = "";			// ofwel geen ' ' als het singular is 
	}
	*/

	// met de vraagtekenoperator:			// var = voorwaarde> voorwaarde ? bij True "s" : bij False " ""
	tmp = aantal > 1 ? "s" : "";

	console.log("%s %s%s of %s on the wall,", aantal, recipient, tmp, inhoud);
	console.log("%s %s%s of %s.", aantal, recipient, tmp, inhoud);
	console.log("Take one down, pass it around,");
	if (aantal > 1) {
		tmp = aantal - 1 > 1 ? "s" : "";  // var = voorwaarde > voorwaarde? True plus S : false geen s 
		console.log("%s %s%s of %s on the wall.", (aantal - 1), recipient, tmp, inhoud);
	}
	else {  // no more bottle+s dus %s+s = %ss
		console.log("No more %ss of %s on the wall.", recipient, inhoud);
	}
	console.log();
}
console.log("No more %ss of %s on the wall,", recipient, inhoud);
console.log("no more %ss of %s.", recipient, inhoud);
console.log("Go to the store and buy some more,");
console.log("%s %ss of %s on the wall.", startAantal, recipient, inhoud);