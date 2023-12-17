import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  title = 'Dashboard';
  sidebarCollapsed = false;

  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }  
  enlaceActivo: string = ''; // Inicializa la variable que representa el enlace activo

  // Método para cambiar el enlace activo
  cambiarEnlaceActivo(enlace: string) {
    this.enlaceActivo = enlace;
  }
}
