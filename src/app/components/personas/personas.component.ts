import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent {
  personas: any[] = [
    {id: 1, nombre: 'lula'},
    {id: 2, nombre: 'cesar'},
    {id: 3, nombre: 'lucas'}
  ];

  nombre = 'Matias';


  constructor() { }


}

