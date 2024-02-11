import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; 

@Component({
  selector: 'app-ver-info-formulario',
  templateUrl: './ver-info-formulario.component.html',
  styleUrls: ['./ver-info-formulario.component.scss']
})
export class VerInfoFormularioComponent {
  data: any;

  constructor(
    public dialogRef: MatDialogRef<VerInfoFormularioComponent>,
    @Inject(MAT_DIALOG_DATA) public initialData: any
  ) {
    this.data = initialData || {}; // Establecer data como un objeto vacío si no se proporciona
    console.log("Datos recibidos en el diálogo:", this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
