import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.scss']
})
export class CiudadesComponent {

  constructor() { }
  ciudades = ['salta', 'jujuy', 'tucuman'];

  ngOnInit(): void {
  }

}
