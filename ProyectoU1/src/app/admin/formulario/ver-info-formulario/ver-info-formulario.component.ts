import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; // Asegúrate de importar MatDialogRef y MAT_DIALOG_DATA

@Component({
  selector: 'app-ver-info-formulario',
  templateUrl: './ver-info-formulario.component.html',
  styleUrls: ['./ver-info-formulario.component.scss']
})
export class VerInfoFormularioComponent {
verInfoFormulario(arg0: any) {
throw new Error('Method not implemented.');
}
  constructor(
    public dialogRef: MatDialogRef<VerInfoFormularioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
