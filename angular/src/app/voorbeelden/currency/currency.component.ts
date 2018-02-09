import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  arrayMoney: any[] = [];
 // arrayMoney2: any[] = [];
  // preview: any;
  // valuata: MuntEenheid = new MuntEenheid();
  arrayMunten: any[] = [];

  constructor(private http: HttpClient) { }


  ngOnInit() {
    this.http.get('https://api.fixer.io/latest').subscribe(
      data => {
        this.arrayMoney = (Object.keys(data['rates']));
       // this.arrayMoney2 = (Object.keys(data['rates']));
       // console.log(this.arrayMoney);
        //  preview = this.arrayMoney[0];

        // CREATE CLASS 
        this.arrayMunten.push(new MuntEenheid(Object.keys(data['rates']),
                                              (Object.values(data['rates']))));

        console.log(this.arrayMunten);

      },
      error => {
        console.log("Er is iets fout gelopen tijdens het opvragen van de gegevens.");
        console.log(error.message);
      });
  }
}


export class MuntEenheid {
  constructor(public naam: string, public waarde: number) {
  }
}