import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro-evaluacion',
  templateUrl: './registro-evaluacion.component.html',
  styleUrls: ['./registro-evaluacion.component.scss']
})
export class RegistroEvaluacionComponent {
  evaluaciones: any[] = [
    { id: 1, nombre: 'Mercy Arrobo', pregunta1:'jdddddhgjh', pregunta2: '0999999999', pregunta3: '-dddd' },
    { id: 2, nombre: 'Johana Salazar', pregunta1:'jdddddhgjh', pregunta2: '0999999999', pregunta3: '-dddd' },
    { id: 3, nombre: 'Maria Perez', pregunta1:'jdddddhgjh', pregunta2: '0999999999', pregunta3: '-dddd' },
    { id: 4, nombre: 'Pedro Perez', pregunta1:'jdddddhgjh', pregunta2: '0999999999', pregunta3: '-dddd' },

  ];
  constructor(private router: Router) {}

  verInfoEvaluacion(evaluacion: any) {
    // Lógica para preparar datos, si es necesario
    this.router.navigate(['/admin/ver-info-evaluacion']);
  }


  mostrarInfo: boolean = false;
  evaluacionSeleccionada: any;

  verInfo(evaluacion: any) {
    this.mostrarInfo = true;
    this.evaluacionSeleccionada = evaluacion;
  }
}
