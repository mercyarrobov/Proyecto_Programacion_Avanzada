import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VerInfoEvaluacionComponent } from '../ver-info-evaluacion/ver-info-evaluacion.component';


@Component({
  selector: 'app-registro-evaluacion',
  templateUrl: './registro-evaluacion.component.html',
  styleUrls: ['./registro-evaluacion.component.scss']
})
export class RegistroEvaluacionComponent {
  evaluaciones: any[] = [
    { id: 1, nombre: 'Mercy Arrobo', pregunta1:'Herencia',
      pregunta2: 'If and Switch',
      pregunta3: 'Arreglos y listas',
      pregunta4: 'Bucles',
      pregunta5: 'CódigoMercy' },
    { id: 2, nombre: 'Johana Salazar', pregunta1:'Herencia',
      pregunta2: 'If and Switch',
      pregunta3: 'Arreglos y listas',
      pregunta4: 'Bucles',
      pregunta5: 'Código Johana' },
    { id: 3, nombre: 'Maria Perez', pregunta1:'Herencia',
      pregunta2: 'If and Switch',
      pregunta3: 'Arreglos y listas',
      pregunta4: 'Bucles',
      pregunta5: 'Código Maria' },
    { id: 4, nombre: 'Pedro Perez', pregunta1:'Herencia',
      pregunta2: 'If and Switch',
      pregunta3: 'Arreglos y listas',
      pregunta4: 'Bucles',
      pregunta5: 'Código Pedro' },

  ];
  constructor(public dialog: MatDialog) {}

  verInfoEvaluacion(evaluacion: any) {
    const dialogRef = this.dialog.open(VerInfoEvaluacionComponent, {
      width: '400px', // Puedes ajustar el ancho según tus necesidades
      data: evaluacion
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El modal se cerró', result);
    });
  }


  mostrarInfo: boolean = false;
  evaluacionSeleccionada: any;

  verInfo(evaluacion: any) {
    this.mostrarInfo = true;
    this.evaluacionSeleccionada = evaluacion;
  }

  aceptarSolicitud(){
    alert("Solicitud Aceptada");
  }

  rechazarSolicitud(){
    alert("Solicitud Rechazada");
  }
}
