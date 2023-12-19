import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; 
import { VerInfoFormularioComponent } from '../ver-info-formulario/ver-info-formulario.component';

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
  
  constructor(public dialog: MatDialog) {} // Asegúrate de inyectar MatDialog

  verInfoFormulario(formulario: any) {
    const dialogRef = this.dialog.open(VerInfoFormularioComponent, {
      width: '400px', // Puedes ajustar el ancho según tus necesidades
      data: formulario
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El modal se cerró', result);
    });
  }

  mostrarInfo: boolean = false;
  formularioSeleccionada: any;

  verInfo(formulario: any) {
    this.mostrarInfo = true;
    this.formularioSeleccionada = formulario;
  }

  aceptarSolicitud(){
    alert("Solicitud Aceptada");
  }

  rechazarSolicitud(){
    alert("Solicitud Rechazada");
  }

}
