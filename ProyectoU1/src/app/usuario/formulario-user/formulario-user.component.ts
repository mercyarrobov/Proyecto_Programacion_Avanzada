import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { SolicitudesService } from 'src/app/solicitudes.service';
import { map } from 'rxjs/operators';
import { AsyncValidatorFn} from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formulario-user',
  templateUrl: './formulario-user.component.html',
  styleUrls: ['./formulario-user.component.scss']
})
export class FormularioUserComponent implements OnInit {

  isHeaderFixed = false;

  captchaValid: boolean = false;
  mostrarMensaje: boolean = false;
  // Agrega esta variable en tu componente
  public mostrarMensajeTemporal = false;


  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private SolicitudesService: SolicitudesService,private http: HttpClient ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  //definicion de los campos del formulario
//implemenatcion de validaciones para los campos

  private buildForm() {
    this.form = this.formBuilder.group({
      //validar cedula ecuatoriana
      cedula: new FormControl('', {
        validators: [Validators.required, Validators.minLength(3), Validators.maxLength(10)],
        asyncValidators: [this.cedulaExistenteValidator()],
        updateOn: 'blur',
      }),

      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
      fecha_nacimiento: new FormControl('', [Validators.required]),
      genero: new FormControl('', [Validators.required]),

      email: new FormControl('', {
        validators: [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)],
        asyncValidators: [this.emailExistenteValidator()],
        updateOn: 'blur',
      }),
      telefono: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]),
      paisresidencia: new FormControl(
      { value: 'Ecuador', disabled: true },
  [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
      nivelEducativo: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
      direccion: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
      carrera: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
      ingresos_familiares: new FormControl('', [Validators.required]),
      Gastos_actuales: new FormControl('', [Validators.required,]),
      objetivos: new FormControl('', [Validators.required, Validators.minLength(10), Validators.minLength(10), Validators.maxLength(1000)]),
      terminos: ["", Validators.required]

    });
  }

  //modificacion de la funcion guardar para que se envie la informacion del formulario
  save(event: Event) {
    event.preventDefault();

    if (this.form.valid && this.captchaValid) {
      const value = this.form.value;

      // Set the default value for paisresidencia
      value.paisresidencia = 'Ecuador';

      this.SolicitudesService.agregarUsuario(value).subscribe(
        (res) => {
          console.log('Usuario agregado con éxito', res);
          this.form.reset();
          this.mostrarMensajeTemporal = true;
          setTimeout(() => {
            this.mostrarMensajeTemporal = false;
          }, 3000);
        },
        (error) => {
          console.error('Error al agregar usuario', error);
          this.mostrarMensajeTemporal = false;
        }
      );
    } else {
      this.form.markAllAsTouched();
      this.mostrarMensajeTemporal = false;
    }
  }

  //incorporacion de recapcha para los terminos y condiciones

  resolved(captchaResponse: string | null) {
    this.captchaValid = (captchaResponse && captchaResponse.length > 0) ? true : false;
  }


// Permite el ingreso solo de letras
  valideInputText(event: KeyboardEvent) {
    const tecla = event.key;
    const codigoTecla = event.keyCode || event.which;
    if (/[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ\s]|ArrowLeft|ArrowRight|Delete|Backspace/.test(tecla) && !/[0-9\-"'¨´@¿?^]/.test(tecla)) {
      return true;
    }
    event.preventDefault();
    return false;
  }

// Permite el ingreso solo de numeros
  validInputNumber(event: KeyboardEvent) {
    const tecla = event.key;
    const codigoTecla = event.keyCode || event.which;
    if (/[0-9]|ArrowLeft|ArrowRight|Delete|Backspace|'+'/.test(tecla)) {
      return true;
    }
    return false;
  }

  // Escucha el evento de desplazamiento de la página
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.isHeaderFixed = window.scrollY > 0;
  }



  validarCedulaEcuatoriana(): void {
    let cedula = this.form.get('cedula')?.value;

    // Elimina espacios y guiones
    cedula = cedula.replace(/[-\s]/g, '');

    // Comprueba que la cédula tenga 10 dígitos
    if (cedula.length !== 10) {
      this.form.get('cedula')?.setErrors({ 'cedulaInvalida': true });
      return;
    }

    // Calcula el dígito verificador
    const coeficientes = [2, 1, 2, 1, 2, 1, 2, 1, 2];
    let suma = 0;
    for (let i = 0; i < 9; i++) {
      const digito = parseInt(cedula.charAt(i), 10);
      const producto = digito * coeficientes[i];
      suma += (producto > 9) ? producto - 9 : producto;
    }

    const residuo = suma % 10;
    const digitoVerificador = (residuo === 0) ? 0 : 10 - residuo;

    const digitoCorrecto = parseInt(cedula.charAt(9), 10);

    if (digitoCorrecto !== digitoVerificador) {
      this.form.get('cedula')?.setErrors({ 'cedulaInvalida': true });
    } else {
      this.form.get('cedula')?.setErrors(null);
    }
  }

  cedulaExistenteValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const cedula = control.value;

      return this.SolicitudesService.verificarCedulaExistente(cedula).pipe(
        map((exists) => (exists ? { cedulaExistente: true } : null))
      );
    };
  }

  emailExistenteValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const email = control.value;

      return this.SolicitudesService.verificarEmailExistente(email).pipe(
        map((exists) => (exists ? { emailExistente: true } : null))
      );
    };
  }

  //Fecha de nacimiento que no exceda la fecha actual
  getCurrentDate() {
    return new Date().toISOString().split('T')[0];
  }

}

