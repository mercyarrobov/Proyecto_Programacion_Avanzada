import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-user',
  templateUrl: './formulario-user.component.html',
  styleUrls: ['./formulario-user.component.scss']
})
export class FormularioUserComponent implements OnInit{

  isHeaderFixed = false;

  captchaValid: boolean = false;
  mostrarMensaje: boolean = false;
  // Agrega esta variable en tu componente
public mostrarMensajeTemporal = false;


  form: FormGroup;

  constructor( private formBuilder: FormBuilder) {
    this.buildForm();
  }
  ngOnInit(): void { }
  //definicion de los campos del formulario
//implemenatcion de validaciones para los campos

  private buildForm() {
    this.form = this.formBuilder.group({
      name: new FormControl('', [Validators.required,Validators.minLength(3), Validators.maxLength(100)]),
      fecha_nacimiento: new FormControl('', [Validators.required]),
      genero: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
      telefono: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]),
      paisresidencia: new FormControl('', [Validators.required,Validators.minLength(3), Validators.maxLength(100)]),
      nivelEducativo: new FormControl('', [Validators.required,Validators.minLength(3), Validators.maxLength(100)]),
      direccion: new FormControl('', [Validators.required,Validators.minLength(3), Validators.maxLength(100)]),
      carrera: new FormControl('', [Validators.required,Validators.minLength(3), Validators.maxLength(100)]),
      ingresos_familiares: new FormControl('', [Validators.required]),
      Gastos_actuales: new FormControl('', [Validators.required,]),
      objetivos :new FormControl('', [Validators.required, Validators.minLength(10),Validators.minLength(10), Validators.maxLength(1000)]),
      terminos: new FormControl('', [Validators.required,])

    });
  }

  //modificacion de la funcion guardar
  save(event: Event) {
    event.preventDefault();
  
    if (this.form.valid && this.captchaValid) {
      const value = this.form.value;
      console.log(value);
      //limpiar formulario
      this.form.reset();
  
      // Muestra el mensaje de éxito temporalmente
      this.mostrarMensajeTemporal = true;
  
      // Después de 3 segundos (3000 milisegundos), oculta el mensaje
      setTimeout(() => {
        this.mostrarMensajeTemporal = false;
      }, 3000);
  
      // Puedes reiniciar el formulario o realizar otras acciones después de guardar
    } else {
      this.form.markAllAsTouched();
      this.mostrarMensajeTemporal = false;
    }
  }
  
  //incorporacion de recapcha para los terminos y condiciones

resolved(captchaResponse: string| null) {
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
validInputNumber (event: KeyboardEvent) {
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

}
