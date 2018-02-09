import { Component, OnInit } from '@angular/core';
import { HogerLager } from './hl.hogerlager';

@Component({
  selector: 'hl',
  templateUrl: './hl.component.html',
  styleUrls: ['./hl.component.css']
})
export class HlComponent implements OnInit {
  gok: number;
  returnString: string = "";
 
  constructor() {}
  ngOnInit() {}
  hogerlager: HogerLager = new HogerLager();

  gokken(): void{
    this.returnString = this.hogerlager.gok(this.gok);
    
  }
  get beurten(){
    return this.hogerlager.aantalbeurten();
  }
  restart():void{
    this.hogerlager.restart();
    
  }

}


