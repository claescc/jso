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

  constructor() {}
  ngOnInit() { }

  bestellen(){
    
    let broeike = new Broodje(this.broodjes[this.val].naam, 
                              this.broodjes[this.val].prijs);
    
    //console.log('broodje: ',this.broodjes[this.val].naam,this.broodjes[this.val].prijs);

    let bestlijn = new Bestellijn(broeike, this.teller);
    console.log('aantal: ',this.teller);
    
    this.lijst.push(bestlijn);
    console.dir(this.lijst);
    
//--------------------------------------------------
 //  let order = new Bestelling(bestlijn[this.val]);
 //  order.totaalprijs();
  }
  get totaal(): number {

   // this.plus += this.broodjes[this.val].prijs;
   // console.log(this.plus);
   // this.totaal = (this.plus*this.teller);
   return ;
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