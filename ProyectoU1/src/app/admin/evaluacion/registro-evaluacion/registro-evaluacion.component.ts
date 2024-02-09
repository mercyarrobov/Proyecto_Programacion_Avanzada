import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VerInfoEvaluacionComponent } from '../ver-info-evaluacion/ver-info-evaluacion.component';
import { SolicitudesService } from 'src/app/solicitudes.service';


@Component({
  selector: 'app-registro-evaluacion',
  templateUrl: './registro-evaluacion.component.html',
  styleUrls: ['./registro-evaluacion.component.scss']
})
export class RegistroEvaluacionComponent implements OnInit{
  evaluaciones: any = [];

  constructor(public solicitudesService: SolicitudesService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos() {
    this.solicitudesService.obtenerEvaluaciones().subscribe(res => {
      this.evaluaciones = res;
    });
  }

}
