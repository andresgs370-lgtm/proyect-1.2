import { Component } from '@angular/core';
import { Carritoservice } from '../../service/carritoservice';

@Component({
  selector: 'app-carritoflotantecomponent',
  standalone: false,
  styleUrl: './carritoflotantecomponent.css',
  templateUrl: './carritoflotantecomponent.html',
})
export class Carritoflotantecomponent {
  abierto = false;

  constructor(public carritoService: Carritoservice) {}

  toggleCarrito() { this.abierto = !this.abierto; }
  eliminar(titulo: string) { this.carritoService.eliminarProducto(titulo); }
  vaciar() { this.carritoService.vaciarCarrito(); }
}
