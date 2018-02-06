/* subklasse */
/* */

class Persoon{
    constructor(public voornaam: string, public naam: string){
    }
}



/* elke student IS EEN persoon */
/* en erft alle velden en methodes van basisklasse Persoon */
/* INHERITANCE (OVERERVING) */
class Student extends Persoon{
    opleiding: string;
    protected studentnr: string = "NN";
}

class Docent extends Persoon{
   private loon: number;
   verhoogloon(bedrag: number){
    this.loon += bedrag;
   }
}

class ErasmusStudent extends Student{
    land: string;
}

let student = new Student("Jos", "Vermeulen");
student.voornaam += "ke";   // Student erft voornaam van Persoon
student.opleiding = "informatica";
console.log(student);

let chloe: ErasmusStudent = new ErasmusStudent('Chloe', 'Claes');
chloe.opleiding = 'FEO';
chloe.land = 'Australia';

let docent: Docent = new Docent( 'Prof', 'Gobelijn');
docent.verhoogloon(1000);
console.log(docent);