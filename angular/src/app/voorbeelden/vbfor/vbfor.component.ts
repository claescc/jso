import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vbfor',
  templateUrl: './vbfor.component.html',
  styleUrls: ['./vbfor.component.css']
})
export class VbForComponent implements OnInit {
  piraten = ["Belki", "Belkii", "Belin", "Belkyn", "Belkin", "Beelkin"];
  naamPiraat: string;
  

  constructor() {
    this.naamPiraat = '';
   }

  ngOnInit() {
  }
  delete(){
    this.piraten.pop();
  }

  addPirate(){
    this.piraten.push(this.naamPiraat);
  }
}
