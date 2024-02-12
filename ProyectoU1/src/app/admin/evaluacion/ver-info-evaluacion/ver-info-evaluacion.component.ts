import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-ver-info-evaluacion',
  templateUrl: './ver-info-evaluacion.component.html',
  styleUrls: ['./ver-info-evaluacion.component.scss']
})
export class VerInfoEvaluacionComponent {

  constructor(
    public dialogRef: MatDialogRef<VerInfoEvaluacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
