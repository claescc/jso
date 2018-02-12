//CONFIGURATIE APP.MODULE.TS

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD


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
import { OefHogerLagerComponent } from './oefeningen/oefhogerlager/oefhogerlager.component';
import { OefCurrencyconvertorComponent } from './oefeningen/oefcurrencyconvertor/oefcurrencyconvertor.component';
import { CurrencyService } from './oefeningen/oefcurrencyconvertor/currency.service';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { VbroutingReqparamComponent } from './voorbeelden/vbrouting/vbrouting-reqparam.component';
import { PageNotFoundComponent } from './voorbeelden/vbrouting/page-not-found.component';
import { Vbrouting0Component } from './voorbeelden/vbrouting/vbrouting0.component';
import { VbroutingComponent } from './voorbeelden/vbrouting/vbrouting.component';
import { VbRoutingModule } from './voorbeelden/vbrouting/vbrouting.module';
import { HeroComponent } from './voorbeelden/hero/hero.component';
import { HeroesComponent } from './voorbeelden/heroes/heroes.component';
// TODO: alle componenten die in deze module gedefinieerd zijn importere
  // zie vbrouting.module.ts
  /*
const appRoutes: Routes = [ // array
=======
import { FormsModule } from '@angular/forms';  // nodig voor ngModel (-> 2 way binding)
import { HttpClientModule } from '@angular/common/http';
//import { Routes, RouterModule } from '@angular/router';

// import { AppComponent } from './app.component';
// import { Oef00Component } from './oefeningen/oef00/oef00.component';
// import { OefNotitieComponent } from './oefeningen/oefnotitie/oefnotitie.component';
// import { VbForuitbrComponent } from './voorbeelden/vbfor/vbforuitbr.component';
// import { OefBroodjesComponent } from './oefeningen/oefbroodjes/oefbroodjes.component';
// import { OefHogerLagerComponent } from './oefeningen/oefhogerlager/oefhogerlager.component';
// import { OefCurrencyconvertorComponent } from './oefeningen/oefcurrencyconvertor/oefcurrencyconvertor.component';
// import { CurrencyService } from './oefeningen/oefcurrencyconvertor/currency.service';
// import { VbDatabindingComponent } from './voorbeelden/vbdatabinding/vbdatabinding.component';
// import { VbIfComponent } from './voorbeelden/vbif/vbif.component';
// import { VbroutingReqparamComponent } from './voorbeelden/vbrouting/vbrouting-reqparam.component';
// import { PageNotFoundComponent } from './voorbeelden/vbrouting/page-not-found.component';
// import { Vbrouting0Component } from './voorbeelden/vbrouting/vbrouting0.component';
// import { VbroutingComponent } from './voorbeelden/vbrouting/vbrouting.component';
import { HeroesService } from './oefeningen/oefheroes/heroes.service';
import { HeroesComponent } from './oefeningen/oefheroes/heroes/heroes.component';
import { HeroesAllComponent } from './oefeningen/oefheroes/heroes-all/heroes-all.component';
import { HeroDetailComponent } from './oefeningen/oefheroes/hero-detail/hero-detail.component';
// TODO: alle componenten die in deze module gedefinieerd zijn importere

// zie vbrouting.module.ts
  /*
const appRoutes: Routes = [
>>>>>>> cab7add44f6cc4c21da34d9b90d69adcacee3973
  {
    path: 'vb01', // url/ href
    component: VbDatabindingComponent
  },
  {
    path: 'vb02',
    component: VbIfComponent
  },
  {
    path: 'currency',
    component: OefCurrencyconvertorComponent
  },
  {
    path: 'routing/:id',
    component: VbroutingReqparamComponent
  },
  {
    path: 'broodje',
    component: OefBroodjesComponent
  },
  { 
    path: '',   // start path
    redirectTo: '/vb02',  // REDIRECT
    //  A redirect route requires a pathMatch property to tell the router 
    //   how to match a URL to the path of a route. The router throws an error 
    //   if you don't. 
    pathMatch: 'full'  // whole URL must match
  },
  { 
    path: '**', // al de rest > Any path 
    component: PageNotFoundComponent 

  } 
];
*/
<<<<<<< HEAD
@NgModule({
  declarations: [
    VbDatabindingComponent,
    VbIfComponent,
    OefCurrencyconvertorComponent,
    PageNotFoundComponent,
    //Vbrouting0Component,
    //VbroutingComponent,
    //VbroutingReqparamComponent,
   // OefBroodjesComponent,
   // HeroComponent,
    HeroesComponent 
=======

@NgModule({
  declarations: [
    HeroDetailComponent,
    HeroesComponent,
    HeroesAllComponent,
>>>>>>> cab7add44f6cc4c21da34d9b90d69adcacee3973
    // TODO: alle componenten die in deze module gedefinieerd zijn hier importeren
  ],
  imports: [
    BrowserModule,
    FormsModule,  //  nodig om 2 way binding te kunnen doen
<<<<<<< HEAD
    HttpClientModule
   // RouterModule.forRoot( appRoutes ), // approute = x /smurf
  
  ],
  providers: [],
  // TODO: in bootstrap array (enkel) alle componenten opsommen
  // die horen bij user defined tags die in index.html gebruikt worden
  bootstrap: [HeroesComponent] // moet getoont worden 
=======
    HttpClientModule,
    // RouterModule.forRoot( appRoutes ),
//    VbRoutingModule
  ],
  providers: [HeroesService],
  // TODO: in bootstrap array (enkel) alle componenten opsommen
  // die horen bij user defined tags die in index.html gebruikt worden
  bootstrap: [HeroesAllComponent]
>>>>>>> cab7add44f6cc4c21da34d9b90d69adcacee3973
})
export class AppModule { }
