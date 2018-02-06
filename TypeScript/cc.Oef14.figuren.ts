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


abstract class Figuur {
    constructor(public kleur: string, soort: string) {  // PARAMETERS
    }
    abstract get omtrek(); 
    abstract get oppervlakte(); 
}

class Cirkel extends Figuur {
    constructor(kleur:string, public straal:number )  { super (kleur, "circle"); }
    get omtrek():number{
        return this.straal;
    }
    get oppervlakte()
}

-

//---------------START PROGRAMMA---------------------
let figuren: Figuur[] = new Array<Figuur>();

figuren.push(new Cirkel("rood", 10));
/*figuren.push(new Rechthoek("blauw", 2, 3));
figuren.push(new Rechthoek("groen", 4, 5));
figuren.push(new Cirkel("geel", 1.5));

for(let figuur of figuren){
    console.log("een %s met eigenschappen: ", figuur.soort);
    console.log("\tkleur: %s\tomtrek: %s\toppervlakte: %s", figuur.kleur, 
        figuur.omtrek, figuur.oppervlakte);
}*/

let circle = new Cirkel('blauw', 10);
