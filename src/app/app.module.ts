import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon/pokemon.component';
import { PokemonCardComponent } from './pokemon/pokemon-card/pokemon-card.component';
import {provideHttpClient} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
