/* subklasse */
/* */
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
var Persoon = /** @class */ (function () {
    function Persoon(voornaam, naam) {
        this.voornaam = voornaam;
        this.naam = naam;
    }
    return Persoon;
}());
/* elke student IS EEN persoon */
/* en erft alle velden en methodes van basisklasse Persoon */
/* INHERITANCE (OVERERVING) */
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Student;
}(Persoon));
var student = new Student("Jos", "Vermeulen");
student.voornaam += "ke"; // Student erft voornaam van Persoon
student.opleiding = "informatica";
console.log(student);
