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
    {
      id: 1,
      nombre: 'Julia Mora',
      email: 'myarro@escape.edu.ec',
      telefono: '0999999999',
      fecha: '2021-05-01',
      fechaNacimiento: '1990-01-15',
      genero: 'Femenino',
      paisResidencia: 'Ecuador',
      direccion: 'Calle Principal 123',
      nivelEducativo: 'Pregrado',
      carrera: 'Ingeniería Informática',
      ingresosHogar: 2000, 
      fuentesFinanciamiento: 'Beca',
      objetivos: 'Estudiar y graduarse en Ingeniería Informática.'
    },
    {
      id: 2,
      nombre: 'Juan Perez',
      email: 'juan@gmail.com',
      telefono: '0999999999',
      fecha: '2021-05-01',
      fechaNacimiento: '1985-08-22',
      genero: 'Masculino',
      paisResidencia: 'México',
      direccion: 'Avenida Central 456',
      nivelEducativo: 'Pregrado',
      carrera: 'Ingeniería Informática',
      ingresosHogar: 3000, 
      fuentesFinanciamiento: 'Beca',
      objetivos: 'Estudiar y graduarse en Ingeniería Informática.'
  
    },
    {
      id: 3,
      nombre: 'Maria Perez',
      email: 'maria@gmail.com',
      telefono: '0999999999',
      fecha: '2021-05-01',
      fechaNacimiento: '1992-04-10',
      genero: 'Femenino',
      paisResidencia: 'Colombia',
      direccion: 'Plaza Principal 789',
      nivelEducativo: 'Pregrado',
      carrera: 'Ingeniería Informática',
      ingresosHogar: 2500, 
      fuentesFinanciamiento: 'Beca',
      objetivos: 'Estudiar y graduarse en Ingeniería Informática.'
  
    },
    {
      id: 4,
      nombre: 'Pedro Perez',
      email: 'pedro@gmail.com',
      telefono: '0999999999',
      fecha: '2021-05-01',
      fechaNacimiento: '1988-11-30',
      genero: 'Masculino',
      paisResidencia: 'Perú',
      direccion: 'Calle Secundaria 321',
      nivelEducativo: 'Pregrado',
      carrera: 'Desarrollo de Software',
      ingresosHogar: 4000, 
      fuentesFinanciamiento: 'Beca',
      objetivos: 'Estudiar y graduarse en Desarrollo de Software.'
    }
  ];
  
  
  constructor(public dialog: MatDialog) {} 

  verInfoFormulario(formulario: any) {
    const dialogRef = this.dialog.open(VerInfoFormularioComponent, {
      width: '800px', // Ajusta el ancho según tus necesidades
      data: formulario
    });

    dialogRef.afterClosed().subscribe((result: any) => {
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
