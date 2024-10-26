import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-ejercicio7',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './ejercicio7.component.html',
  styleUrl: './ejercicio7.component.css'
})
export class Ejercicio7Component {
  num1: number = 0;
  num2: number = 0;
  resultado: number | string = '';

  sumar() {
    this.resultado = this.num1 + this.num2;
  }

  restar() {
    this.resultado = this.num1 - this.num2;
  }

  multiplicar() {
    this.resultado = this.num1 * this.num2;
  }

  dividir() {
    if (this.num2 !== 0) {
      this.resultado = this.num1 / this.num2;
    } else {
      this.resultado = 'Error: División por cero';
    }
  }

  raizCuadrada() {
    this.resultado = Math.sqrt(this.num1);
  }
}
