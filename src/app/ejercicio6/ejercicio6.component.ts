import {Component, Input} from '@angular/core';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-ejercicio6',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './ejercicio6.component.html',
  styleUrl: './ejercicio6.component.css'
})

export class Ejercicio6Component{
  // Propiedades para recibir datos de entrada del producto
  @Input() nombre: string = '';
  @Input() descripcion: string = '';
  @Input() precio: number = 0;
}
