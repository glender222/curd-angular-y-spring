import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { Especialidad } from './models/especialidad';
import { EspecialidadService } from './service/especialidad.service';

@Component({
  selector: 'app-especialidad',
  standalone: true,
  imports: [ SidebarComponent,
    NavbarComponent,
    RouterModule,
     CommonModule,
      TableModule,
      PanelModule,],
  templateUrl: './especialidad.component.html',
  styleUrl: './especialidad.component.css'
})
export class EspecialidadComponent {
  especialidades: Especialidad[] = [];

  constructor(private especialidadService: EspecialidadService) {}

  ngOnInit(): void {
    this.listarEspecialidades();
  }

  listarEspecialidades(): void {
    this.especialidadService.getEspecialidades().subscribe((data) => {
      this.especialidades = data;
    });
  }
}
