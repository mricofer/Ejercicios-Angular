import { Component } from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-ejercicio2',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './ejercicio2.component.html',
  styleUrl: './ejercicio2.component.css'
})
export class Ejercicio2Component {
  horaActual: Date = new Date(); //Declaramos horaActual que contiene la hora actual
  private intervalId: any;

  //Creamos el ciclo de vida del componente

  ngOnInit(){ //Se ejecuta al iniciar el componente
    this.intervalId = setInterval(() => {
      this.horaActual = new Date();
    }, 1000)
  }

  ngOnDestroy() { //Se ejecuta cuando el componente se destruye
    if (this.intervalId) {
      clearInterval(this.intervalId) //Evita fugas de memoria
    }
  }
}
