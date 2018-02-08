import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'commentbox',
  templateUrl: './commentbox.component.html',
  styleUrls: ['./commentbox.component.css']
})
export class CommentboxComponent implements OnInit {
  txtbox: string;
  saveDisabled: boolean;
  delDisabled: boolean;

  constructor() { 
    this.txtbox = '';
  }
  get disableBtn(){
    return this.txtbox.length == 0;
  }


  ngOnInit() {}

  save(){
    alert(this.txtbox);
  }

  delete(){
    
    return this.txtbox = '';
  }
  
  bereken(){
    return 100 - this.txtbox.length;
  }
}

 

/*
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
*/