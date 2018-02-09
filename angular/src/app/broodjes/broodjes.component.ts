import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'broodjes',
  templateUrl: './broodjes.component.html',
  styleUrls: ['./broodjes.component.css']
})
export class BroodjesComponent implements OnInit {
  broodjes = [{naam: "Ham", prijs: 2.30},
              {naam: "Krab", prijs: 2.60},
              {naam: "Kaas", prijs: 1.70},
              {naam: "Kip", prijs: 4.30}];
  val: number;
  brood: string;
  teller: number;
  lijst= [];

  constructor() { }
  ngOnInit() { }

  bestellen(){
    let broeike = new Broodje(this.broodjes[this.val].naam,  // Krab
                              this.broodjes[this.val].prijs);// 1.2
    let bestlijn = new Bestellijn(broeike, this.teller);
    this.lijst.push(bestlijn);
    
  }
  get totaal(): number {
    let totaal: number = 0;
    for (let lijn of this.lijst){
      totaal+= lijn.broodje.prijs * lijn.aantal;
    }
     return totaal;
  }

}

class Broodje {
  naam: string;
  prijs: number;
 constructor(naam: string,prijs: number){
   this.naam = naam;
   this.prijs = prijs;
 }
}

class Bestellijn {
  broodje: Broodje;
  aantal: number;
  constructor(broodje:Broodje,aantal: number){
    this.broodje = broodje;
   this.aantal = aantal;
  }
}

//---------------------------------------
class Bestelling {
  bestellijnen: Bestellijn[];
  constructor(bestellijnen: Bestellijn[]){}
  
  totaalprijs(){
    
  }
}