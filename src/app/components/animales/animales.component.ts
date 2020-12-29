import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.scss']
})
export class AnimalesComponent{

  constructor() { }

  animales: string[] = ['perro', 'gato', 'elefante'];
  /* ngOnInit(): void {
  } */

}
