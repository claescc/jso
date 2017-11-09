'use strict';

var toetsenbord = require('readline-sync');
var punten = toetsenbord.question("punten: ");
var graad = "";                 // 0-9 is eigenlijk -9
switch (true) {                 // '0-9' string moet lettermijk getypt worden '0-9' en niet een cijfer 
    case punten < 0:            // switch ( true ) het is waar als volgende volgt waar is 
    case punten > 20:
        graad = "ongeldige score";
        break;
    case punten < 10:
        graad = "Onvoldoende";
        break;
    case punten < 14:
        graad = "Voldoende";
        break;
    case punten < 16:
        graad = "Onderscheiding";
        break;
    case punten < 18:
        graad = "Grote Onderscheiding";
        break;
    default:
        graad = "Grootste Onderscheiding";
}
console.log(graad);