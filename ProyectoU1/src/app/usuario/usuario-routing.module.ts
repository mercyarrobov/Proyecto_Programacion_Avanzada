import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario.component';
import { FormularioUserComponent } from './formulario-user/formulario-user.component';
import { EvaluacionUserComponent } from './evaluacion-user/evaluacion-user.component';

const routes: Routes = [
  {
    path: 'usuario',
    component: UsuarioComponent,
    children: [
      { path: 'formularioUser', component: FormularioUserComponent },
      { path: 'evaluacionUser', component: EvaluacionUserComponent },
      { path: '', redirectTo: 'formularioUser', pathMatch: 'full' },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
