//SPECIFICATIONS VB00 functies ect..

import { Component, OnInit } from '@angular/core';

@Component({ // DECORATOR COMPONENT
  selector: 'vbdatabinding',
  templateUrl: './vbdatabinding.component.html', // IPV VAN TAG {{ }}
  styleUrls: ['./vbdatabinding.component.css']
})
export class VbDatabindingComponent implements OnInit {
  kolomhoofding: string;
  naam: string;
  voornaam: string;// NAAM PROPERTY MOET IDENTIEK ZIJN AAN COMPONENT.HTML 

  constructor() { 
    this.naam = "Vermeulen";
    this.voornaam = "Joske";
  }

  ngOnInit() {
  }

  volledigeNaam(): string{
    return this.voornaam + " " + this.naam.toUpperCase();
  }

  klikHandler(): void{
    alert("Hallo, " + this.volledigeNaam());
  }

}
