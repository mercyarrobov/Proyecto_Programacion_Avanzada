import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionUserComponent } from './evaluacion-user.component';

describe('EvaluacionUserComponent', () => {
  let component: EvaluacionUserComponent;
  let fixture: ComponentFixture<EvaluacionUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvaluacionUserComponent]
    });
    fixture = TestBed.createComponent(EvaluacionUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
