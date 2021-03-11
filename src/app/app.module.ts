import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeroesModulo} from './heroes/heroes.modulo';
import {ContadorModulo} from './contador/contador.modulo';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModulo,
    ContadorModulo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
