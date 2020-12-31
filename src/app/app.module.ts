import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CiudadesComponent } from './components/ciudades/ciudades.component';
import { AnimalesComponent } from './components/animales/animales.component';
import { PersonasComponent } from './components/personas/personas.component';
import { FormsModule } from '@angular/forms';


import { VerIpComponent } from './components/ver-ip/ver-ip.component';

// servicios
import {Servicio1Service} from './servises/servicio1.service';



@NgModule({
  declarations: [
    AppComponent,
    CiudadesComponent,
    AnimalesComponent,
    PersonasComponent,
    VerIpComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],

  providers: [Servicio1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
