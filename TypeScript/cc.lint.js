var Lint = /** @class */ (function () {
    function Lint(kleur, lengte) {
        this.kleur = kleur;
        this.lengte = lengte;
    }
    Object.defineProperty(Lint.prototype, "knip", {
        set: function (verkort) {
            this.lengte -= verkort;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Lint.prototype, "nuLint", {
        get: function () {
            return this.lengte;
        },
        enumerable: true,
        configurable: true
    });
    Lint.prototype.stukken = function (delen) {
        var deelbaar = this.lengte % delen;
        if (deelbaar == 0) {
            return 'lint: ' + this.lengte + ' meter kan in: ' + this.lengte / delen + ' stukken.';
        }
        else {
            return 'lint: ' + this.lengte + ' meter kan in: ' + Math.floor(this.lengte / delen) + ' stukken.';
        }
    };
    return Lint;
}());
var newLint = new Lint("Rood", 10);
console.log(newLint); // {...}
newLint.knip = 2;
console.log(newLint.nuLint);
console.log(newLint.stukken(2));
//---------------------------------
var newLint2 = new Lint("Blauw", 20);
console.log(newLint2.stukken(3));
