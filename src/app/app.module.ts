import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CiudadesComponent } from './components/ciudades/ciudades.component';
import { AnimalesComponent } from './components/animales/animales.component';
import { PersonasComponent } from './components/personas/personas.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CiudadesComponent,
    AnimalesComponent,
    PersonasComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
