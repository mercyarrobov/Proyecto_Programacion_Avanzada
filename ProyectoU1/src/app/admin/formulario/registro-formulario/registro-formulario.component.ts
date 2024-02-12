import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VerInfoFormularioComponent } from '../ver-info-formulario/ver-info-formulario.component';
import { SolicitudesService } from 'src/app/solicitudes.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-registro-formulario',
  templateUrl: './registro-formulario.component.html',
  styleUrls: ['./registro-formulario.component.scss']
})
export class RegistroFormularioComponent implements OnInit{

  solicitudes: any = [];

  constructor(public solicitudesService: SolicitudesService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

 cargarDatos() {
    this.solicitudesService.obtenerSolicitudes().subscribe(res => {
      this.solicitudes = res;
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
        this.solicitudesService.enviarCorreoF1Aceptado(id, email).subscribe(
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
      if (result.isConfirmed) {
        // Si el usuario hace clic en "Rechazar"
        this.solicitudesService.enviarCorreoYEliminar(id, email).subscribe(
          (res: any) => {
            Swal.fire('¡Solicitud rechazada y eliminada!', 'La solicitud ha sido rechazada y eliminada correctamente.', 'success');            
            window.location.reload();
          },
          (error) => {
            console.error('Error al rechazar y eliminar la solicitud:', error);
          }
        );
      }
    });
  }
  verInfoFormulario(solicitud: any): void {
    if (solicitud && Object.keys(solicitud).length !== 0) {
      console.log("Datos de la solicitud:", solicitud);
      const dialogRef = this.dialog.open(VerInfoFormularioComponent, {
        width: '80%',
        data: solicitud
      });
    } else {
      console.error('Los datos de la solicitud están indefinidos:', solicitud);
    }
  }


}
