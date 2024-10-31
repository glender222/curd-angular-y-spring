import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { Doctor } from './models/doctor';
import { Especialidad } from '../especialidad/models/especialidad';
import { DoctorService } from './service/doctor.service';
import { EspecialidadService } from '../especialidad/service/especialidad.service';

@Component({
  selector: 'app-doctor',
  standalone: true,
  imports: [ FormsModule,
    SidebarComponent,
      NavbarComponent,
      RouterModule,
       CommonModule,
        TableModule,
        PanelModule,
        ButtonModule,
        DialogModule,],
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.css'
})
export class DoctorComponent {
  doctores: Doctor[] = [];
  especialidades: Especialidad[] = [];
  nuevoDoctor: Doctor = new Doctor();
  doctorSeleccionado: Doctor = new Doctor();
  isDialogVisible: boolean = false;
  isAddDialogVisible: boolean = false;

  constructor(
    private doctorService: DoctorService,
    private especialidadService: EspecialidadService
  ) {}

  ngOnInit(): void {
    this.listarDoctores();
    this.listarEspecialidades();
  }

  listarDoctores(): void {
    this.doctorService.getDoctores().subscribe(
      (data) => {
        console.log('Datos recibidos de doctores:', data); // Verificación de los datos recibidos
        this.doctores = data;
      },
      (error) => {
        console.error('Error al cargar doctores:', error);
      }
    );
  }

  listarEspecialidades(): void {
    this.especialidadService.getEspecialidades().subscribe((data) => {
      this.especialidades = data;
    });
  }

  abrirDialogoEditar(doctor: Doctor): void {
    this.doctorSeleccionado = { ...doctor };
    this.isDialogVisible = true;
  }

  guardarCambios(): void {
    this.doctorService.updateDoctor(this.doctorSeleccionado.id, this.doctorSeleccionado).subscribe(
      (updatedDoctor) => {
        const index = this.doctores.findIndex(d => d.id === updatedDoctor.id);
        if (index !== -1) {
          this.doctores[index] = updatedDoctor;
        }
        this.isDialogVisible = false;
      }
    );
  }

  abrirDialogoAgregar(): void {
    this.nuevoDoctor = new Doctor();
    this.isAddDialogVisible = true;
  }

  agregarDoctor(): void {
    this.doctorService.crearDoctor(this.nuevoDoctor).subscribe(
      (newDoctor) => {
        this.doctores.push(newDoctor);
        this.isAddDialogVisible = false;
      },
      (error)=>
        console.error("error al agregar el doctor", error)
    );
  }

  eliminarDoctor(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este doctor?')) {
      this.doctorService.eliminarDoctor(id).subscribe(() => {
        this.doctores = this.doctores.filter(doctor => doctor.id !== id);
      });
    }
  }
}
