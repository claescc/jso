import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Vb00Component } from './vb00/vb00.component';


@NgModule({
  declarations: [ // alle classe namen van alle componenten in deze mod zitten
    AppComponent, Vb00Component // class name
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [Vb00Component] // namen van welke componenten die in tags gebruikt zinn 
})
export class AppModule { }
