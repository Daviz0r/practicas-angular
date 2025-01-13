import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CounterModule } from './counter/counter.module';
import { HeroModule } from './heroes/heroes.module';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { DbzModule } from './dbz/dbz.module';


@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroModule,
    DbzModule,
    AppRoutingModule,
    CommonModule
  
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
