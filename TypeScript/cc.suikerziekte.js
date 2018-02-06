var SuikerSpiegel = /** @class */ (function () {
    function SuikerSpiegel(dag, maand, jaar) {
        this.dag = dag;
        this.maand = maand;
        this.jaar = jaar;
        this.bloedwaarden = [];
        this._date = new Date(jaar, maand, dag);
    }
    ;
    SuikerSpiegel.prototype.getDate = function () {
        return this._date.toLocaleDateString();
        //let date = this.dag + '/' + this.maand + '/' + this.jaar; 
        //return date;
    };
    SuikerSpiegel.prototype.noteer = function (metingNr, waarde) {
        this.bloedwaarden[metingNr] = waarde;
    };
    SuikerSpiegel.prototype.aantalHypos = function () {
        var hypos = 0;
        for (var i = 0; i < this.bloedwaarden.length; i++) {
            if (this.bloedwaarden[i] < 60) {
                hypos++;
            }
        }
        return hypos;
    };
    SuikerSpiegel.prototype.aantalHypers = function () {
        var hypers = 0;
        for (var i = 0; i < this.bloedwaarden.length; i++) {
            if (this.bloedwaarden[i] > 250) {
                hypers++;
            }
        }
        return hypers;
    };
    SuikerSpiegel.prototype.isHypo = function (index) {
        if (this.bloedwaarden[index] < 60) {
            return true;
        }
        else {
            return false;
        }
    };
    SuikerSpiegel.prototype.isHyper = function (index) {
        if (this.bloedwaarden[index] > 250) {
            return true;
        }
        else {
            return false;
        }
    };
    return SuikerSpiegel;
}());
var suiker = new SuikerSpiegel(1, 1, 2018); // 5 = juni 
suiker.noteer(3, 210);
suiker.noteer(1, 45);
suiker.noteer(4, 260);
suiker.noteer(2, 40);
suiker.noteer(0, 255);
suiker.noteer(5, 59);
console.log("Hypers: " + suiker.aantalHypers());
console.log("Hypos: " + suiker.aantalHypos());
console.log("is Hypo?", suiker.isHypo(1));
console.log("is Hyper?", suiker.isHyper(4));
console.log(suiker.getDate());
