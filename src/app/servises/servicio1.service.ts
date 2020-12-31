import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Servicio1Service {

  constructor(private http: HttpClient) { }

  obtenerIp(){
    return this.http.get('https://jsonip.com').pipe(map( (data: any) => { return data.ip; }));
  }
}
