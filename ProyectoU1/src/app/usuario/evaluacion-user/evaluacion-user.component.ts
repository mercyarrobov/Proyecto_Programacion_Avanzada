import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-evaluacion-user',
  templateUrl: './evaluacion-user.component.html',
  styleUrls: ['./evaluacion-user.component.scss']
})
export class EvaluacionUserComponent implements OnInit {
  form: FormGroup;
  showSuccessMessage: boolean = false;
  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }
  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
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
      console.log(value);
      this.form.reset();
      this.showSuccessMessage = true; // Mostrar el mensaje de éxito
      // Opcional: Puedes agregar un temporizador para ocultar el mensaje después de unos segundos
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 4000);
    }else{
      this.form.markAllAsTouched();
    }
  }
  
}
