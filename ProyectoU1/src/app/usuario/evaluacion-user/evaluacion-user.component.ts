import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import { SolicitudesService } from 'src/app/solicitudes.service';
import {HttpClient} from "@angular/common/http";
import { AsyncValidatorFn} from '@angular/forms';
import { Observable } from 'rxjs';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-evaluacion-user',
  templateUrl: './evaluacion-user.component.html',
  styleUrls: ['./evaluacion-user.component.scss']
})
export class EvaluacionUserComponent implements OnInit {
  form: FormGroup;
  showSuccessMessage: boolean = false;
  constructor(private formBuilder: FormBuilder, private SolicitudesService: SolicitudesService,private http: HttpClient ) {
    this.buildForm();
  }
  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)],
        asyncValidators: [this.emailExistenteValidator(), this.emailExistenteEvaluacionValidator()],
        updateOn: 'blur',
      }),
      questions1: new FormControl('', [Validators.required]),
      questions2: new FormControl('', [Validators.required]),
      questions3: new FormControl('', [Validators.required]),
      questions4: new FormControl('', [Validators.required]),
      ejercicio: new FormControl('', [Validators.required, Validators.maxLength(1000), Validators.minLength(100)]),
    });
  }



  save(event: Event) {
    event.preventDefault();

    if (this.form.valid) {
      const value = this.form.value;

      // Verificar si el correo electrónico ya existe
      this.SolicitudesService.verificarEmailExistente(value.email).subscribe(exists => {
        if (!exists) {
          // El usuario no está registrado
          console.log('El usuario no está registrado');
          // Puedes mostrar un mensaje indicando que el usuario no está registrado
          return;
        }

        // Verificar si el correo electrónico ya existe para la evaluación
        this.SolicitudesService.verificarEmailExistenteEvaluacion(value.email).subscribe(exists => {
          if (exists) {
            // El usuario ya realizó la evaluación
            console.log('Este usuario ya rindió la evaluación');
            // Aquí puedes mostrar un mensaje o manejar la situación de acuerdo a tus necesidades
          } else {
            // El usuario puede registrar la evaluación
            this.SolicitudesService.agregarEvaluacion(value).subscribe(res => {
              console.log('Evaluación registrada con éxito', res);
              this.form.reset();
              this.showSuccessMessage = true;
              setTimeout(() => {
                this.showSuccessMessage = false;
              }, 4000);
            }, error => {
              console.error('Error al registrar la evaluación', error);
            });
          }
        }, error => {
          console.error('Error al verificar el correo electrónico para la evaluación', error);
        });
      }, error => {
        console.error('Error al verificar el correo electrónico', error);
      });
    } else {
      this.form.markAllAsTouched();
    }
  }

  emailExistenteValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const email = control.value;

      return this.SolicitudesService.verificarEmailExistente(email).pipe(
        map((exists) => (exists ? null : { emailNoExistente: true }))
      );
    };
  }

  emailExistenteEvaluacionValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const email = control.value;

      return this.SolicitudesService.verificarEmailExistenteEvaluacion(email).pipe(
        map((exists) => (exists ? { emailExistente: true } : null))
      );
    };
  }

}
