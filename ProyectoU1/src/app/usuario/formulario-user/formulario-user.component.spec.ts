import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioUserComponent } from './formulario-user.component';

describe('FormularioUserComponent', () => {
  let component: FormularioUserComponent;
  let fixture: ComponentFixture<FormularioUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioUserComponent]
    });
    fixture = TestBed.createComponent(FormularioUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
