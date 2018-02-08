import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'numberz',
  templateUrl: './numberz.component.html',  // IPV VAN TAG {{ }}
  styleUrls: ['./numberz.component.css']
})

export class NumberzComponent implements OnInit {
    count: number;
    const: number;

  constructor() { 
    this.count = 0;
    this.const = 1,2;
  }

  bereken(): number{
    return this.count*this.const;
  }

  ngOnInit() {
  }

}

