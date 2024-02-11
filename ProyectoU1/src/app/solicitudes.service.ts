import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


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
    //metodo par agregar
    agregarUsuario(nuevoUsuario: any) {
      return this.http.post(this.url + '/usuarios', nuevoUsuario);
  }

  
   // Nuevos métodos para la verificación
   verificarCedulaExistente(cedula: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.url}/verificar-cedula/${cedula}`);
  }
  
  verificarEmailExistente(email: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.url}/verificar-email/${email}`);
  }
  
}

