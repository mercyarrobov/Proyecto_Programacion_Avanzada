import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: '', pathMatch: 'full', redirectTo: 'usuario/publicidadUser' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
