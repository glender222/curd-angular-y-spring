import { Routes } from '@angular/router';
import { DoctorComponent } from './doctor/doctor.component';
import { HomeComponent } from './home/home.component';
import { EspecialidadComponent } from './especialidad/especialidad.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'home'
  },{
    path: 'doctor',
    component:DoctorComponent,
    title:'Doctor'
  },{
    path:'especialidad',
    component:EspecialidadComponent,
    title:'Especialidad',
  },{
    path:'**',
    redirectTo:'',
    pathMatch:'full'
  }
];
