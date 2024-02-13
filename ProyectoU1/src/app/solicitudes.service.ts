import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

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

  /* FASE 1 - ACEPTADO Y RECHAZADO */
  enviarCorreoF1Aceptado(id: string, email: string) {
    return this.http.post(`${this.url}/envioF1A`, { id, email });
  }
  //Enviar correo de rechazo
  enviarCorreoYEliminar(id: string, email: string) {
    return this.http.post(`${this.url}/envioF1R`, { id, email }).pipe(
      switchMap(() => {
        return this.http.delete(`${this.url}/eliminarSolicitud/${id}`);
      })
    );
  }

  //metodo par agregar
  agregarUsuario(nuevoUsuario: any) {
    return this.http.post(this.url + '/usuarios', nuevoUsuario);
  }

  enviarCorreoF2Aceptado(id: string, email: string) {
    return this.http.post(`${this.url}/envioF2A`, { id, email });
  }

  enviarCorreoF2Rechazado(id: string, email: string) {
    return this.http.post(`${this.url}/envioF2R`, { id, email });
  }

   // Nuevos métodos para la verificación
   verificarCedulaExistente(cedula: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.url}/verificar-cedula/${cedula}`);
  }

  verificarEmailExistente(email: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.url}/verificar-email/${email}`);
  }

  agregarEvaluacion(nuevaEvaluacion: any) {
    return this.http.post(this.url + '/evaluaciones', nuevaEvaluacion);
  }

  verificarEmailExistenteEvaluacion(email: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.url}/verificar-email-evaluacion/${email}`);
  }

}

