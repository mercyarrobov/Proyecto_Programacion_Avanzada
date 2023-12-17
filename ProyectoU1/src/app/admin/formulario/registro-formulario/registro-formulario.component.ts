import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro-formulario',
  templateUrl: './registro-formulario.component.html',
  styleUrls: ['./registro-formulario.component.scss']
})
export class RegistroFormularioComponent {
  evaluaciones: any[] = [
    { id: 1, nombre: 'Julia Mora', email:'myarro@escape.edu.ec', telefono: '0999999999', fecha: '2021-05-01' },
    { id: 2, nombre: 'Juan Perez', email:'juan@gmail.com', telefono: '0999999999', fecha: '2021-05-01' },
    { id: 3, nombre: 'Maria Perez', email:'maria@gmail.com', telefono: '0999999999', fecha: '2021-05-01' },
    { id: 4, nombre: 'Pedro Perez', email:'pedro@gmail.com', telefono: '0999999999', fecha: '2021-05-01' },

  ];
  
constructor(private router: Router) {}
verInfoFormulario(formulario: any) {
  // Lógica para preparar datos, si es necesario
  this.router.navigate(['/admin/ver-info-formulario']);
}

  mostrarInfo: boolean = false;
  formularioSeleccionada: any;

  verInfo(formulario: any) {
    this.mostrarInfo = true;
    this.formularioSeleccionada = formulario;
  }
}
