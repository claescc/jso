import { Component, OnInit } from '@angular/core';
import { Hero, Helden } from '../hero/hero.mock-heros';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  available = false;
  id: number;
  held: string;
  veelhelden= 'Er zijn veel helden';
  heroes = Helden.HEROES;
  infohero: string;
  
  constructor() {    
  }

  ngOnInit() {
  }
 
  showinfo(naam): void{
    this.infohero = "Extra info: "+ naam ;
  
  }

}
