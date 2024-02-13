import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VerInfoEvaluacionComponent } from '../ver-info-evaluacion/ver-info-evaluacion.component';
import { SolicitudesService } from 'src/app/solicitudes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-evaluacion',
  templateUrl: './registro-evaluacion.component.html',
  styleUrls: ['./registro-evaluacion.component.scss']
})
export class RegistroEvaluacionComponent implements OnInit {
  evaluaciones: any[] = [];

  constructor(
    public solicitudesService: SolicitudesService,
    private dialog: MatDialog // Agrega esta línea
  ) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos() {
    this.solicitudesService.obtenerEvaluaciones().subscribe(
      res => {
        this.evaluaciones = res as any[]; //Almacena todo las evaluaciones en el array 
      },
      (error) => {
        console.error('Error al cargar las evaluaciones:', error);
      }
    );
  }
  //Se muestra un Dialog para el usuario 
  verInfoEvaluacion(evaluacion: any) {
    this.dialog.open(VerInfoEvaluacionComponent, {
      width: '600px',
      data: evaluacion
    });
  }

  aceptarSolicitud(id: string, email: string) {
    Swal.fire({
      title: '¿Estás seguro de aceptar esta solicitud?',
      text: 'Una vez aceptada, la solicitud no se podrá revertir.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, aceptar',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Si el usuario hace clic en "Aceptar"
        this.solicitudesService.enviarCorreoF2Aceptado(id, email).subscribe(
          (res: any) => {
            Swal.fire('¡Solicitud aceptada!', 'La solicitud ha sido aceptada correctamente.', 'success');
            // Puedes realizar otras acciones aquí después de aceptar la solicitud
          },
          (error) => {
            console.error('Error al enviar correo de aceptación:', error);
          }
        );
      }
    });
  }
  //Se realiza el rechazo de la solicitud pasando dos parametros, el id y el email
  rechazarSolicitud(id: string, email: string) {
    Swal.fire({
      title: '¿Estás seguro de rechazar esta solicitud?',
      text: 'Una vez rechazada, la solicitud no se podrá revertir.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, rechazar',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if (result.isConfirmed) { //Se verifica en caso de que se rechaze la solicitud
        // Si el usuario hace clic en "Rechazar"
        this.solicitudesService.enviarCorreoF2Rechazado(id, email).subscribe(
          (res: any) => {
            Swal.fire('¡Solicitud rechazada y eliminada!', 'La solicitud ha sido rechazada y eliminada correctamente.', 'success')
              .then(() => {
                // Recargar la página después de cerrar la alerta
                window.location.reload();
              });
          },
          (error) => {
            console.error('Error al rechazar y eliminar la solicitud:', error);
          }
        );
      }
    });
  }
}
