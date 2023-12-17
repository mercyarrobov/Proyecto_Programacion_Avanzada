import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerInfoFormularioComponent } from './ver-info-formulario.component';

describe('VerInfoFormularioComponent', () => {
  let component: VerInfoFormularioComponent;
  let fixture: ComponentFixture<VerInfoFormularioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerInfoFormularioComponent]
    });
    fixture = TestBed.createComponent(VerInfoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
