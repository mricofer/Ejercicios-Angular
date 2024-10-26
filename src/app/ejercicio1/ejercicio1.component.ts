import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-ejercicio1',
  standalone: true,
  imports: [],
  templateUrl: './ejercicio1.component.html',
  styleUrl: './ejercicio1.component.css'
})
export class Ejercicio1Component {
  // El componente debe aceptar un @Input() que represente el nombre de la persona a la que saluda.

  @Input() nombre: string = ""

  constructor() { }
}
