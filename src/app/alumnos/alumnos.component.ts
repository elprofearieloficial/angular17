import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import Alumno from '../model/alumno';

@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css',
})
export class AlumnosComponent {
  public alumnos: Alumno[] = [];
  constructor() {
    this.alumnos.push(new Alumno('12345', 'Ariel'));
    this.alumnos.push(new Alumno('12346', 'Saul'));
    this.alumnos.push(new Alumno('12347', 'Cesar'));
    this.alumnos.push(new Alumno('12348', 'Gerardo'));
  }
}
