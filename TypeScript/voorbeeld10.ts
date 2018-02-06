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
<<<<<<< HEAD
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
=======
    protected studentnr: string = "NN";  // protected => toegankelijk in deze klasse en
    // in de subklassen
}

class ErasmusStudent extends Student{
    wijzigStudentNr(nieuwNr: string): void{
        this.studentnr = nieuwNr;  
    }
}

class Docent extends Persoon{
    private loon: number = 5000;
    verhoogLoon(bedrag: number){
        this.loon += bedrag;
    }
>>>>>>> 7bb63a22946a017bc6f025dd2f8bf6394b5a9e25
}

let student = new Student("Jos", "Vermeulen");
student.voornaam += "ke";   // Student erft voornaam van Persoon
student.opleiding = "informatica";
console.log(student);
<<<<<<< HEAD

let chloe: ErasmusStudent = new ErasmusStudent('Chloe', 'Claes');
chloe.opleiding = 'FEO';
chloe.land = 'Australia';

let docent: Docent = new Docent( 'Prof', 'Gobelijn');
docent.verhoogloon(1000);
console.log(docent);
=======
// student.studentnr = "123";  // compileerfout; want studentnr is protected

let chloe: ErasmusStudent = new ErasmusStudent("Chloe", "Claes");
chloe.opleiding = "FEO";
chloe.voornaam = "Chloé";
console.log(chloe);

let docent: Docent = new Docent("Prof", "Gobelijn");
docent.verhoogLoon(100000);
// docent.opleiding = "blabla";  // compileerfout; want Docent heeft geen veld opleiding
console.log(docent);
>>>>>>> 7bb63a22946a017bc6f025dd2f8bf6394b5a9e25
