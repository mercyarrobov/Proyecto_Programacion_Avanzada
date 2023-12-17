import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroFormularioComponent } from './formulario/registro-formulario/registro-formulario.component';
import { RegistroEvaluacionComponent } from './evaluacion/registro-evaluacion/registro-evaluacion.component';
import { AdminComponent } from './admin.component';
import { VerInfoFormularioComponent } from './formulario/ver-info-formulario/ver-info-formulario.component';
import { VerInfoEvaluacionComponent } from './evaluacion/ver-info-evaluacion/ver-info-evaluacion.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'formulario', component: RegistroFormularioComponent },
      { path: 'evaluacion', component: RegistroEvaluacionComponent },
      { path: 'ver-info-formulario', component: VerInfoFormularioComponent }, // Ruta para ver-info-formulario
      { path: 'ver-info-evaluacion', component: VerInfoEvaluacionComponent }, // Ruta para ver-info-evaluacion
      { path: '', redirectTo: 'formulario', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
