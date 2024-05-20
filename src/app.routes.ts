import { Routes } from '@angular/router';
import { AlumnosComponent } from './app/alumnos/alumnos.component';
import { MateriasComponent } from './app/materias/materias.component';
import { CalificacionesComponent } from './app/calificaciones/calificaciones.component';
import { ErrorpageComponent } from './app/errorpage/errorpage.component';
import { AlumnoComponent } from './app/alumno/alumno.component';

export const routes: Routes = [
  { path: 'materias', component: MateriasComponent },
  { path: 'alumnos', component: AlumnosComponent },
  { path: 'calificaciones', component: CalificacionesComponent },
  { path: 'alumno/:id', component: AlumnoComponent },

  { path: '**', component: ErrorpageComponent },
];
