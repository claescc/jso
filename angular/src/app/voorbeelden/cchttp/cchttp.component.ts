import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'cchttp',
  templateUrl: './cchttp.component.html',
  styleUrls: ['./cchttp.component.css']
})
export class CchttpComponent implements OnInit {
  mensen: any[];
  fotos: any = [];

  constructor(private http: HttpClient, private http2: HttpClient) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
      data => {
        this.mensen = data as any[];

      },
      error => {
        console.log("Er is iets fout gelopen tijdens het opvragen van de gegevens.");
        console.log(error.message);
      });
    //--------------------------------------------------------------  
    this.http2.get('https://jsonplaceholder.typicode.com/photos').subscribe(
      data => {
     
       this.fotos = data;


      },
      error => {
        console.log("Er is iets fout gelopen tijdens het opvragen van de gegevens.");
        console.log(error.message);
      });
  }

}
