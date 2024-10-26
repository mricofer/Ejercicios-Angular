import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-ejercicio5',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './ejercicio5.component.html',
  styleUrl: './ejercicio5.component.css'
})
export class Ejercicio5Component  {
  nuevoComentario: string = ''; // Almacena el comentario que el usuario está ingresando
  listaComentarios: string[] = []; // Lista de todos los comentarios ingresados

  // Método para agregar un nuevo comentario a la lista
  enviarComentario() {
    if (this.nuevoComentario.trim()) {
      this.listaComentarios.push(this.nuevoComentario); // Agrega el comentario a la lista
      this.nuevoComentario = ''; // Limpia el campo de entrada
    }
  }
}
