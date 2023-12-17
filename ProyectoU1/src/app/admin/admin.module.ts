import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { RegistroFormularioComponent } from './formulario/registro-formulario/registro-formulario.component';
import { RegistroEvaluacionComponent } from './evaluacion/registro-evaluacion/registro-evaluacion.component';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { VerInfoEvaluacionComponent } from './evaluacion/ver-info-evaluacion/ver-info-evaluacion.component';
import { VerInfoFormularioComponent } from './formulario/ver-info-formulario/ver-info-formulario.component';

@NgModule({
  declarations: [
    AdminComponent,
    RegistroFormularioComponent,
    RegistroEvaluacionComponent,
    VerInfoEvaluacionComponent,
    VerInfoFormularioComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  providers: [],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
