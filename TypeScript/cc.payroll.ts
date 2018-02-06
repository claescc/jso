/*oefPayroll:
DEEL 1
Een bedrijf betaalt zijn werknemers, die verondersteld worden 40 u/week te werken, op wekelijkse basis.

Er werken 4 types werknemers:
 * werknemers die een vast weeksalaris hebben;
 * werknemers die per uur betaald worden, en die voor de overuren die zij presteren tegen 150% vergoed worden;
 * verkopers die een percentage van hun verkoop krijgen als weeksalaris;
 * verkopers die bovenop een vast weeksalaris een percentage van hun verkoop krijgen.

Van elke werknemer worden voornaam, familienaam en social security number bijgehouden.


-------------------------------------------------------------------------------*/

abstract class Werknemer{
    constructor(public name:string, public surname:string, private ss:number, public loon:number ){}
    abstract get salaris();
    
}
//-----------------------------------------------------------

class wVastWeek extends Werknemer {
    constructor(name:string, surname:string, ss:number,loon:number) 
    {super(name, surname, ss, loon)}
   get salaris():number { 
       let berken = this.loon * 4;
       return berken;
   }
}
class wPerUurOver extends Werknemer {
    constructor(name:string, surname:string, ss:number, loon:number,public oUren:number) 
    {super(name, surname, ss, loon)}
    get salaris():number { 
        let berken = ((this.loon * 7)*5)*4;
        let overUren = (this.oUren * 1.50); // 150% op overuren
        berken += overUren;
        return berken;
    }
}
class vPercent extends Werknemer {
    constructor(name:string, surname:string, ss:number,loon:number ) 
    {super(name, surname, ss, loon)}
    get salaris():number { 
        let berkn = (this.loon *0.10)*4; // 10% van verkoop
        return berkn;
    }
}
class wVastPercent extends Werknemer {
    constructor(name:string, surname:string, ss:number,loon:number, public verkoop: number) 
    {super(name, surname, ss, loon)}
   get salaris():number {
    let berken = this.loon *4;
    let percVerkoop = this.verkoop*0.05;
     return berken+= percVerkoop;
    }
}
//----------------------------------------------------------
//------------------- START PROGRAMMA ----------------------
let bob:wVastWeek = new wVastWeek ('Bob','Harold', 101030, 400); // 400€/perweek
let fre:wPerUurOver= new wPerUurOver ('Fre','Halikns', 103010, 15,3); // 15€/u + 3 overuren
let belkin:vPercent = new vPercent ('Belkin','Mies', 105010, 5600); // verkocht 5600€
let marie:wVastPercent = new wVastPercent ('Marie','Lomme', 166010, 350, 3500);
//350/w 3500 verkocht

let werknemers: Werknemer[] = [];
werknemers.push(bob);
werknemers.push(fre);
werknemers.push(belkin);
werknemers.push(marie);
//console.log(werknemers);

for (let employee of werknemers){
    console.log('Maandloon: %s  naam: %s %s',employee.salaris, employee.name, employee.surname );
    if (employee instanceof wVastPercent){ // x instanceof class
        employee.loon += (employee.loon*0.10) ;
     console.log('\n Nieuw maandloon: %s  naam: %s %s',employee.salaris, employee.name, employee.surname );
    }
}


//------------------------------------------------------------------
/* DEEL 2
Maak een klasse Payroll waarin de gegevens van de werknemers van dit bedrijf zitten.
Als de tabel uit het vorige deel van de opdracht employees heet, en Employee de basisklasse van alle werknemertypes is, moet het testprogramma als volgt uitgebreid kunnen worden: */


/*
let payroll: Payroll = new Payroll();
for (let employee of employees) {
    if (employee != undefined) {
        payroll.addEmployee(employee);
    }
}
for (let i: number = 0; i < payroll.count; i++) {
    console.log(payroll.getEmployee(i).toString());
}
let totalEarnings: number = payroll.totalEarnings;
console.log("Total earnings: %s", totalEarnings);

Voorzie voor elk type werknemer ook een getter om op te vragen hoeveel werknemers 
van dat type op de payroll staan.
*/


