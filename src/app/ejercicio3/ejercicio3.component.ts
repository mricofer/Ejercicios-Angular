import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-ejercicio3',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './ejercicio3.component.html',
  styleUrl: './ejercicio3.component.css'
})

export class Ejercicio3Component {
  // Array para almacenar las tareas
  tareas: string[] = [];

  // Variable para enlazar el campo de entrada
  nuevaTarea: string = '';

  // Método para agregar una nueva tarea al array
  agregarTarea() {
    // Verifica que la tarea no esté vacía
    if (this.nuevaTarea.trim()) {
      this.tareas.push(this.nuevaTarea);
      this.nuevaTarea = ''; // Limpia el campo de entrada
    }
  }
}
