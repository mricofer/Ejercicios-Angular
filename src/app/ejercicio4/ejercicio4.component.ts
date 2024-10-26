import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-ejercicio4',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './ejercicio4.component.html',
  styleUrl: './ejercicio4.component.css'
})
export class Ejercicio4Component {
  tiempoInicial: number = 0;  // Tiempo ingresado por el usuario en segundos
  tiempoRestante: number = 0; // Tiempo restante en la cuenta regresiva
  intervalo: any;             // Variable para almacenar el intervalo

  // Método para iniciar el temporizador
  iniciarTemporizador() {
    if (this.tiempoInicial > 0 && !this.intervalo) {
      this.tiempoRestante = this.tiempoInicial;

      // Configura el intervalo para reducir el tiempo cada segundo
      this.intervalo = setInterval(() => {
        if (this.tiempoRestante > 0) {
          this.tiempoRestante--;
        } else {
          this.detenerTemporizador(); // Detiene el temporizador al llegar a 0
        }
      }, 1000);
    }
  }

  // Método para detener el temporizador
  detenerTemporizador() {
    clearInterval(this.intervalo); // Limpia el intervalo
    this.intervalo = null;         // Restaura la variable a null
  }
}
