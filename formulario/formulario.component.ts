
import { Component, OnInit,HostListener } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { debounceTime } from 'rxjs/operators';  // 'rxjs/operators' para obtener debounceTime
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  isHeaderFixed = false;

  captchaValid: boolean = false;
  mostrarMensaje: boolean = false;
  // Agrega esta variable en tu componente
public mostrarMensajeTemporal = false;


  form: FormGroup;

  constructor(private http: HttpClient, private formBuilder: FormBuilder,private zone: NgZone) {
    this.buildForm();
    this.form.valueChanges.pipe(
     debounceTime(500)
    ).subscribe(value=>{
      console.log(value);
    })
  }
  ngOnInit(): void { }

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
    console.log(this.form);
  }
  save(event: Event) {
    event.preventDefault();
  
    if (this.form.valid && this.captchaValid) {
      const value = this.form.value;
      console.log(value);
  
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
