/* Voorbeeld14: abstract method
oefFiguren:
Er zijn (voorlopig) twee soorten figuren: cirkels en rechthoeken.
Alle figuren hebben een kleur (string) en een soort (string).
Alle cirkels zijn figuren met soort “cirkel” en hebben een straal (number).
Alle rechthoeken zijn figuren met soort “rechthoek” en hebben een lengte (number) en een breedte (number).
Zorg ervoor de omtrek en de oppervlakte van alle figuren (ook van toekomstige figuren) opgevraagd kan worden en op de juiste manier berekend wordt.
De klassen moeten werken met onderstaand programma
------------------------------------------------------------------
dat volgende output geeft:
een cirkel met eigenschappen:
        kleur: rood     omtrek: 62.83185307179586       oppervlakte: 314.1592653589793
een rechthoek met eigenschappen:
        kleur: blauw    omtrek: 10      oppervlakte: 6
een rechthoek met eigenschappen:
        kleur: groen    omtrek: 18      oppervlakte: 20
een cirkel met eigenschappen:
        kleur: geel     omtrek: 9.42477796076938        oppervlakte: 7.0685834705770345
--------------------------------------------------------------*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Figuur = /** @class */ (function () {
    function Figuur(sort) {
        this.sort = sort;
        // console.log('een %s met eigenschappen:');
    }
    return Figuur;
}());
var Cirkel = /** @class */ (function (_super) {
    __extends(Cirkel, _super);
    function Cirkel(sort, color, omtre, oppv) {
        return _super.call(this, sort) || this;
    }
    Cirkel.prototype.soort = function (sort) {
        return sort;
    };
    Cirkel.prototype.kleur = function (color) {
        return color;
    };
    ;
    Cirkel.prototype.omtrek = function (omtre) {
        return omtre;
    };
    ;
    Cirkel.prototype.oppervlakte = function (oppv) {
        return oppv;
    };
    return Cirkel;
}(Figuur));
//---------------START PROGRAMMA---------------------
var figuren = new Array();
figuren.push(new Cirkel("rood", 10));
/*figuren.push(new Rechthoek("blauw", 2, 3));
figuren.push(new Rechthoek("groen", 4, 5));
figuren.push(new Cirkel("geel", 1.5));
*/
for (var _i = 0, figuren_1 = figuren; _i < figuren_1.length; _i++) {
    var figuur = figuren_1[_i];
    console.log("een %s met eigenschappen: ", figuur.soort);
    console.log("\tkleur: %s\tomtrek: %s\toppervlakte: %s", figuur.kleur, figuur.omtrek, figuur.oppervlakte);
}
