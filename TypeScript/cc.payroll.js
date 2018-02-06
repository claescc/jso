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
var Werknemer = /** @class */ (function () {
    function Werknemer(name, surname, ss, loon) {
        this.name = name;
        this.surname = surname;
        this.ss = ss;
        this.loon = loon;
    }
    return Werknemer;
}());
//-----------------------------------------------------------
var wVastWeek = /** @class */ (function (_super) {
    __extends(wVastWeek, _super);
    function wVastWeek(name, surname, ss, loon) {
        return _super.call(this, name, surname, ss, loon) || this;
    }
    Object.defineProperty(wVastWeek.prototype, "salaris", {
        get: function () {
            var berken = this.loon * 4;
            return berken;
        },
        enumerable: true,
        configurable: true
    });
    return wVastWeek;
}(Werknemer));
var wPerUurOver = /** @class */ (function (_super) {
    __extends(wPerUurOver, _super);
    function wPerUurOver(name, surname, ss, loon, oUren) {
        var _this = _super.call(this, name, surname, ss, loon) || this;
        _this.oUren = oUren;
        return _this;
    }
    Object.defineProperty(wPerUurOver.prototype, "salaris", {
        get: function () {
            var berken = ((this.loon * 7) * 5) * 4;
            var overUren = (this.oUren * 1.50); // 150% op overuren
            berken += overUren;
            return berken;
        },
        enumerable: true,
        configurable: true
    });
    return wPerUurOver;
}(Werknemer));
var vPercent = /** @class */ (function (_super) {
    __extends(vPercent, _super);
    function vPercent(name, surname, ss, loon) {
        return _super.call(this, name, surname, ss, loon) || this;
    }
    Object.defineProperty(vPercent.prototype, "salaris", {
        get: function () {
            var berkn = (this.loon * 0.10) * 4; // 10% van verkoop
            return berkn;
        },
        enumerable: true,
        configurable: true
    });
    return vPercent;
}(Werknemer));
var wVastPercent = /** @class */ (function (_super) {
    __extends(wVastPercent, _super);
    function wVastPercent(name, surname, ss, loon, verkoop) {
        var _this = _super.call(this, name, surname, ss, loon) || this;
        _this.verkoop = verkoop;
        return _this;
    }
    Object.defineProperty(wVastPercent.prototype, "salaris", {
        get: function () {
            var berken = this.loon * 4;
            var percVerkoop = this.verkoop * 0.05;
            return berken += percVerkoop;
        },
        enumerable: true,
        configurable: true
    });
    return wVastPercent;
}(Werknemer));
//----------------------------------------------------------
//------------------- START PROGRAMMA ----------------------
var bob = new wVastWeek('Bob', 'Harold', 101030, 400); // 400€/perweek
var fre = new wPerUurOver('Fre', 'Halikns', 103010, 15, 3); // 15€/u + 3 overuren
var belkin = new vPercent('Belkin', 'Mies', 105010, 5600); // verkocht 5600€
var marie = new wVastPercent('Marie', 'Lomme', 166010, 350, 3500);
//350/w 3500 verkocht
var werknemers = [];
werknemers.push(bob);
werknemers.push(fre);
werknemers.push(belkin);
werknemers.push(marie);
//console.log(werknemers);
for (var _i = 0, werknemers_1 = werknemers; _i < werknemers_1.length; _i++) {
    var employee = werknemers_1[_i];
    console.log('Maandloon: %s  naam: %s %s', employee.salaris, employee.name, employee.surname);
    if (employee instanceof wVastPercent) {
        employee.loon += (employee.loon * 0.10);
        console.log('\n Nieuw maandloon: %s  naam: %s %s', employee.salaris, employee.name, employee.surname);
    }
}
/*
Deze week wil de firma de laatste categorie verkopers belonen door hun vast salaris met 10% te verhogen. (tip: operator instanceof) */
//------------------------------------------------------------------
/* DEEL 2
Maak een klasse Payroll waarin de gegevens van de werknemers van dit bedrijf zitten.
Als de tabel uit het vorige deel van de opdracht employees heet, en Employee de basisklasse van alle werknemertypes is, moet het testprogramma als volgt uitgebreid kunnen worden:

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
