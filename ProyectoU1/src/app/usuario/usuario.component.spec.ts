import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UsuarioComponent } from './usuario.component';

describe('AdminComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [UsuarioComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(UsuarioComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ProyectoU1'`, () => {
    const fixture = TestBed.createComponent(UsuarioComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ProyectoU1');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(UsuarioComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('ProyectoU1 app is running!');
  });
});
