//CONFIGURATIE APP.MODULE.TS

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { VbDatabindingComponent } from './voorbeelden/vbdatabinding/vbdatabinding.component';
import { NumberzComponent } from './numberz/numberz.component';
import { CommentboxComponent } from './commentbox/commentbox.component';
import { VbIfComponent } from './voorbeelden/vbif/vbif.component' ;
import { VbForComponent} from './voorbeelden/vbfor/vbfor.component';
import { VbSwitchComponent} from './voorbeelden/vbswitch/vbswitch.component';
import {VbPipesComponent } from './voorbeelden/vbpipes/vbpipes.component';
import { BroodjesComponent } from './broodjes/broodjes.component';
import { FormsModule } from '@angular/forms';  // nodig voor ngModel (-> 2 way binding)

import { Oef00Component } from './oefeningen/oef00/oef00.component';
import { OefNotitieComponent } from './oefeningen/oefnotitie/oefnotitie.component';
import { VbForuitbrComponent } from './voorbeelden/vbfor/vbforuitbr.component';
import { OefBroodjesComponent } from './oefeningen/oefbroodjes/oefbroodjes.component';
import {VbFormValidationComponent} from './voorbeelden/vbformvalidation/form-validation.component';
import { HlComponent } from './voorbeelden/vbformvalidation/hl/hl.component';
import { HttpClientModule } from '@angular/common/http';
import {VbHttpComponent} from './voorbeelden/vbhttp/vbhttp.component';
import { CchttpComponent } from './voorbeelden/cchttp/cchttp.component';
// TODO: alle componenten die in deze module gedefinieerd zijn importeren

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
    BroodjesComponent,
    VbFormValidationComponent,
    HlComponent,
    VbHttpComponent,
    CchttpComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
 bootstrap: [ CchttpComponent ]
})
export class AppModule { }
