import { Component, Input, numberAttribute } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-alumno',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './alumno.component.html',
  styleUrl: './alumno.component.css'
})
export class AlumnoComponent { 
  @Input({transform: numberAttribute}) id:number=0;
}
