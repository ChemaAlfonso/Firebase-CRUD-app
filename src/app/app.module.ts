import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Http y forms
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroes/heroe.component';

// Routes
import { AppRoutingModule } from './app.routes';

//Pipes
import { KeysPipe } from './pipes/keys.pipe';

//Servicios
import { HeroesService } from './services/heroes.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
