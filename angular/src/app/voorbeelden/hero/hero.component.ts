import { Component, OnInit } from '@angular/core';
import { Helden, Hero } from './hero.mock-heros';



@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
 id: number;
 available: boolean;
 heronaam: string;
 superheld: string;

  constructor() {
  this.id = this.mindy.id;
  this.heronaam = this.mindy.name;
  this.superheld = this.mindy.name.toLocaleUpperCase();
  this.available = this.mindy.beschikbaar;
   }

  ngOnInit() {
  }

  mindy: Hero = new Hero(1, 'Mega Mindy', true);

  

}


