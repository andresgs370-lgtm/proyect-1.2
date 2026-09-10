import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Carritoservice {
  items: any[] = [];

  agregarProducto(producto: any) {
    const existente = this.items.find(p => p.titulo === producto.titulo);

    if (existente) {
      existente.cantidad++;
    } else {
      this.items.push({ ...producto, cantidad: 1 });
    }
  }

  eliminarProducto(titulo: string) {
    this.items = this.items.filter(p => p.titulo !== titulo);
  }

  vaciarCarrito() {
    this.items = [];
  }
}
