//CONFIGURATIE APP.MODULE.TS

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { VbDatabindingComponent } from './voorbeelden/vbdatabinding/vbdatabinding.component';
import { NumberzComponent } from './numberz/numberz.component';
import { CommentboxComponent } from './commentbox/commentbox.component';
import { VbIfComponent } from './voorbeelden/vbif/vbif.component' ;
import { VbForComponent} from './voorbeelden/vbfor/vbfor.component';
import { VbSwitchComponent} from './voorbeelden/vbswitch/vbswitch.component';
import {VbPipesComponent } from './voorbeelden/vbpipes/vbpipes.component';
import { BroodjesComponent } from './broodjes/broodjes.component';

@NgModule({
  declarations: [
    AppComponent,
    VbDatabindingComponent,
    NumberzComponent,
    CommentboxComponent,
    VbIfComponent,
    VbForComponent,
    VbSwitchComponent,
    VbPipesComponent,
    BroodjesComponent 
  
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
 bootstrap: [ BroodjesComponent ]
 // bootstrap: [ CommentboxComponent]
  //bootstrap: [VbDatabindingComponent, NumberzComponent]
})
export class AppModule { }
