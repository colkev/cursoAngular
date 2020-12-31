import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CiudadesComponent } from './components/ciudades/ciudades.component';
import { AnimalesComponent } from './components/animales/animales.component';
import { PersonasComponent } from './components/personas/personas.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';

const rutas: Routes = [
  {path: 'menu', component: MenuComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CiudadesComponent,
    AnimalesComponent,
    PersonasComponent,
    MenuComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
