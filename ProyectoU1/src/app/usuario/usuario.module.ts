import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';
import { FormularioUserComponent } from './formulario-user/formulario-user.component';
import { EvaluacionUserComponent } from './evaluacion-user/evaluacion-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecaptchaModule } from 'ng-recaptcha';
import { PublicidadComponent } from './publicidad/publicidad.component';

@NgModule({
  declarations: [
    UsuarioComponent,
    FormularioUserComponent,
    EvaluacionUserComponent,
    PublicidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    RecaptchaModule
  ],
  providers: [],
  bootstrap: [UsuarioComponent]
})
export class UsuarioModule { }
