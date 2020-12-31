import { Servicio1Service } from './../../servises/servicio1.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ver-ip',
  templateUrl: './ver-ip.component.html',
  styleUrls: ['./ver-ip.component.scss']
})
export class VerIpComponent implements OnInit {

  ip: string;
  constructor(private servicio1Service: Servicio1Service) {  }

  async ngOnInit() {
    this.ip = await this.servicio1Service.obtenerIp().toPromise();
  }

}
