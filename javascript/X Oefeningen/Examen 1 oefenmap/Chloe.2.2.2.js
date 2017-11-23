'use strict';
var toetsenbord = require('readline-sync');
var eenheden = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
var tientallen = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
var honderdtallen = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
var duizendtallen = ["", "M", "MM"];


var ingaveJaar = parseInt(toetsenbord.question("Geef om te zetten jaartal: "));
romeinseCijfers(checkGetal(ingaveJaar));

function checkGetal(cijfer) {
    var y = cijfer;
    while (isNaN(y)) {
        console.log("%s is geen getal", y);
        y = parseInt(toetsenbord.question("Geef cijfer tussen 1-2100: "));
    }
    while (y < 1 || y > 2100) {
        console.log("%s is niet tussen 1-2100", y);
        y = parseInt(toetsenbord.question("Geef jaartal tussen 1-2100: "));
    }
    return y;   
}

function romeinseCijfers(x) {
    var romeinseCijfers = [["M", 1000], ["CM", 900], ["D", 500], ["CD", 400], ["C", 100], ["XC", 90], ["L", 50], ["XL", 40], ["X", 10], ["IX", 9], ["V", 5], ["IV", 4], ["I", 1]];
    var tijdelijkTotaal = 0;
    var romeins = "";
    for (var i = 0; i < romeinseCijfers.length; i++) {
        while (tijdelijkTotaal + romeinseCijfers[i][1] <= x) {
            tijdelijkTotaal += romeinseCijfers[i][1];
            romeins += romeinseCijfers[i][0];
        }
    }
    console.log("%s is in Romeinse cijfers %s waarbij %s het ingetikte jaar is en %s dat jaar in Romeinse cijfers.", x, romeins, x, romeins);
    // return romeins;
}


