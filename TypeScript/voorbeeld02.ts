/* ter kennismaking: interface, class */

interface Persoon{ // opsomming velden en methodes. 
    naam: string;
    voornaam: string;
} // minstens het aantal doorgeven maar meer mag ook! alleen niet minder dan original.

function greeter(persoon: Persoon){
    return "Hello, " + persoon.voornaam + " " + persoon.naam;
}

var persoon: Persoon = { voornaam: "Joske", naam: "Vermeulen"};
console.log(greeter(persoon));

// class Defenities{ property1: type;
//                   constructor(para1: type, para2: type){...}
//                   methodNaam(param1: type; param2: type): returntype {...} };


class Student { // velden en methods ( prop wel waardes + method moet uitgewerkt zijn)
    volledigeNaam: string;
    /* public voor param in ctor zorgt ervoor dat autom. property met die naam gemaakt wordt */
    constructor(public voornaam, public middelNaam, public naam) {
        this.volledigeNaam = voornaam + " " + middelNaam + " " + naam;
    }
}

var student: Student = new Student("Joske", "T.B.", "Vermeulen");
console.log(student.volledigeNaam);
console.log(greeter(student));