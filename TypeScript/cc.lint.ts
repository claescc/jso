
class Lint {
    constructor(private kleur: string, private lengte: number) {
    }
    set knip(verkort: number){
        this.lengte -= verkort;
    }
    get nuLint(): number{
        return this.lengte;
    }
    
    stukken(delen:number){
       let deelbaar = this.lengte % delen;
       if (deelbaar == 0){
           return 'lint: ' + this.lengte + ' meter kan in: '+ this.lengte/delen + ' stukken.';
       }else {
           return 'lint: ' + this.lengte + ' meter kan in: '+ Math.floor(this.lengte/delen) + ' stukken.';
       }

    } 
}

let newLint: Lint = new Lint("Rood", 10);
console.log(newLint); // {...}

newLint.knip = 2;
console.log(newLint.nuLint);

console.log(newLint.stukken(2));


//---------------------------------
let newLint2: Lint = new Lint("Blauw", 20);
console.log(newLint2.stukken(3));


