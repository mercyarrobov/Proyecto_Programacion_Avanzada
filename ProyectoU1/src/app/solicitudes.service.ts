import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  url = "http://localhost:3000"

  constructor(public http: HttpClient) { }
  
  obtenerSolicitudes(){
    return this.http.get(this.url + '/solicitud');
  }

  obtenerEvaluaciones(){
    return this.http.get(this.url + '/evaluacion');
  }

  enviarCorreoF1Aceptado(id: string, email: string) {
    return this.http.post(`${this.url}/envioF1A`, { id, email });
  }
  
  enviarCorreoF1Rechazado(id: string, email: string) {
    return this.http.post(`${this.url}/envioF1R`, { id, email });
  }
  
}

