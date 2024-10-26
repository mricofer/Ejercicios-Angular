import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

interface Articulo {
  nombre: string;
  precio: number;
  cantidad: number;
}

@Component({
  selector: 'app-ejercicio8',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './ejercicio8.component.html',
  styleUrl: './ejercicio8.component.css'
})
export class Ejercicio8Component {
  articulos: Articulo[] = [
    { nombre: 'Manzana', precio: 0.5, cantidad: 0 },
    { nombre: 'Plátano', precio: 0.3, cantidad: 0 },
    { nombre: 'Naranja', precio: 0.4, cantidad: 0 },
    { nombre: 'Fresa', precio: 0.6, cantidad: 0 },
  ];

  // Método para aumentar la cantidad de un artículo
  aumentarCantidad(articulo: Articulo) {
    articulo.cantidad++;
  }

  // Método para disminuir la cantidad de un artículo
  disminuirCantidad(articulo: Articulo) {
    if (articulo.cantidad > 0) {
      articulo.cantidad--;
    }
  }

  // Método para calcular el total
  calcularTotal(): number {
    return this.articulos.reduce((total, articulo) => total + (articulo.precio * articulo.cantidad), 0);
  }
}
