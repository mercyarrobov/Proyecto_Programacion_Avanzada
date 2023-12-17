import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerInfoEvaluacionComponent } from './ver-info-evaluacion.component';

describe('VerInfoEvaluacionComponent', () => {
  let component: VerInfoEvaluacionComponent;
  let fixture: ComponentFixture<VerInfoEvaluacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerInfoEvaluacionComponent]
    });
    fixture = TestBed.createComponent(VerInfoEvaluacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
