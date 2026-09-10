import { Component } from '@angular/core';
import { Carritoservice } from '../../service/carritoservice';

@Component({
  selector: 'app-ventascomponent',
  standalone: false,
  styleUrl: './ventascomponent.css',
  templateUrl: './ventascomponent.html',
})
export class Ventascomponent {

  constructor(private carritoService: Carritoservice) {}

  agregarAlCarrito(producto: any) {
    this.carritoService.agregarProducto(producto);
  }


  secciones: any[] = [
    {
      nombre: 'Electrónica',
      productos: [
        {titulo: 'Audífonos Bluetooth', precio: 25.99, imagen: '/auris%20inalambricos.jpg'},
        {titulo: 'Cargador Rápido', precio: 12.50, imagen: '/cargadorrapido.jpg'},
        {titulo: 'Mouse Inalámbrico', precio: 9.99, imagen: '/mouseinalambrico.jpg'},
        {titulo: 'Teclado Mecánico', precio: 34.99, imagen: '/tecladomeca.jpg'},
        {titulo: 'Power Bank 10000mAh', precio: 19.99, imagen: '/bateria1000mah.jpg'},
        {titulo: 'Cámara Web HD', precio: 22.50, imagen: '/camara.jpg'},
        {titulo: 'Parlante Portátil', precio: 18.75, imagen: '/parlante1.jpg'},
        {titulo: 'Smartwatch Básico', precio: 45.00, imagen: '/smart.jpg'},
      ]
    },
    {
      nombre: 'Ropa',
      productos: [
        {titulo: 'Camiseta Básica', precio: 9.99, imagen: 'camisablanca.jpg'},
        {titulo: 'Jean Clásico', precio: 29.99, imagen: 'jean.jpg'},
        {titulo: 'Chaqueta Impermeable', precio: 39.99, imagen: 'chaqueta.jpg'},
        {titulo: 'Gorra Deportiva', precio: 12.00, imagen: 'gorrita.jpg'},
        {titulo: 'Medias Pack x3', precio: 7.50, imagen: 'medias3.jpg'},
        {titulo: 'Sudadera con Capucha', precio: 24.99, imagen: 'buzosaco.jpg'},
        {titulo: 'Cinturón de Cuero', precio: 15.00, imagen: 'correacuero.jpg'},
        {titulo: 'Bufanda de Lana', precio: 10.50, imagen: 'bufanda.jpg'},
      ]
    },
    {
      nombre: 'Hogar',
      productos: [
        {titulo: 'Juego de Sábanas', precio: 22.00, imagen: 'sabanas.jpg'},
        {titulo: 'Set de Toallas', precio: 18.50, imagen: 'toallas.jpg'},
        {titulo: 'Lámpara de Mesa', precio: 16.99, imagen: 'lampara.jpg'},
        {titulo: 'Organizador Multiusos', precio: 9.75, imagen: 'organizador.jpg'},
        {titulo: 'Set de Ollas', precio: 49.99, imagen: 'ollas.jpg'},
        {titulo: 'Cortinas Blackout', precio: 27.00, imagen: 'cortinas.jpg'},
        {titulo: 'Alfombra Antideslizante', precio: 14.25, imagen: 'alfombra.jpg'},
        {titulo: 'Difusor de Aromas', precio: 19.99, imagen: 'difusor.jpg'},
      ]
    },
    {
      nombre: 'Belleza',
      productos: [
        {titulo: 'Crema Hidratante', precio: 14.99, imagen: 'crema.jpg'},
        {titulo: 'Shampoo Reparador', precio: 8.50, imagen: 'shampoo.jpg'},
        {titulo: 'Set de Brochas', precio: 12.99, imagen: 'brochas.jpg'},
        {titulo: 'Perfume 50ml', precio: 32.00, imagen: 'perfume.jpg'},
        {titulo: 'Esmalte de Uñas', precio: 4.50, imagen: 'esmalte.jpg'},
        {titulo: 'Mascarilla Facial', precio: 6.99, imagen: 'facial.jpg'},
        {titulo: 'Secador de Pelo', precio: 28.00, imagen: 'secador.jpg'},
        {titulo: 'Espejo con Luz LED', precio: 17.50, imagen: 'espejo.jpg'},
      ]
    },
    {
      nombre: 'Deportes',
      productos: [
        {titulo: 'Balón de Fútbol', precio: 15.99, imagen: 'balon.jpg'},
        {titulo: 'Yoga Mat', precio: 18.00, imagen: 'yoga.jpg'},
        {titulo: 'Mancuernas 5kg', precio: 22.50, imagen: 'mancuernas.jpg'},
        {titulo: 'Botella Deportiva', precio: 8.00, imagen: 'botella.jpg'},
        {titulo: 'Guantes de Gimnasio', precio: 10.99, imagen: 'guantes.jpg'},
        {titulo: 'Cuerda para Saltar', precio: 6.50, imagen: 'cuerda.jpg'},
        {titulo: 'Banda de Resistencia', precio: 7.99, imagen: 'banda.jpg'},
        {titulo: 'Bicicleta Estática Mini', precio: 65.00, imagen: 'bici.jpg'},
      ]
    },
    {
      nombre: 'Juguetes',
      productos: [
        {titulo: 'Rompecabezas 500pz', precio: 11.99, imagen: 'rompecabezas.jpg'},
        {titulo: 'Carro a Control Remoto', precio: 24.99, imagen: 'carrorc.jpg'},
        {titulo: 'Muñeca Articulada', precio: 16.50, imagen: 'muñeca.jpg'},
        {titulo: 'Set de Bloques', precio: 19.99, imagen: 'bloques.jpg'},
        {titulo: 'Peluche Grande', precio: 14.00, imagen: 'peluche.jpg'},
        {titulo: 'Juego de Mesa Familiar', precio: 21.00, imagen: 'juegomesa.jpg'},
        {titulo: 'Pelota Saltarina', precio: 5.99, imagen: 'pelota.jpg'},
        {titulo: 'Robot Educativo', precio: 39.99, imagen: 'robot.jpg'},
      ]
    },
    {
      nombre: 'Libros',
      productos: [
        {titulo: 'Novela Best Seller', precio: 13.99, imagen: 'novela.jpg'},
        {titulo: 'Libro de Cocina', precio: 17.50, imagen: 'cocina.jpg'},
        {titulo: 'Cuento Infantil', precio: 6.99, imagen: 'cuentos.jpg'},
        {titulo: 'Enciclopedia Ilustrada', precio: 29.99, imagen: 'enciclopedia.jpg'},
        {titulo: 'Diario de Notas', precio: 5.50, imagen: 'diario.jpg'},
        {titulo: 'Libro de Autoayuda', precio: 12.00, imagen: 'autoayuda.jpg'},
        {titulo: 'Cómic Edición Especial', precio: 9.99, imagen: 'comic.jpg'},
        {titulo: 'Agenda Anual', precio: 8.75, imagen: 'agenda.jpg'},
      ]
    },
    {
      nombre: 'Mascotas',
      productos: [
        {titulo: 'Alimento para Perro 3kg', precio: 18.99, imagen: 'alimento.jpg'},
        {titulo: 'Rascador para Gato', precio: 22.00, imagen: 'rascador.jpg'},
        {titulo: 'Correa Ajustable', precio: 9.50, imagen: 'correaajustable.jpg'},
        {titulo: 'Cama para Mascota', precio: 27.99, imagen: 'camamascota.jpg'},
        {titulo: 'Juguete Interactivo', precio: 8.99, imagen: 'jugueteinteractivo.jpg'},
        {titulo: 'Comedero Doble', precio: 11.50, imagen: 'comederodoble.jpg'},
        {titulo: 'Shampoo para Mascotas', precio: 7.25, imagen: 'shampoomascotas.jpg'},
        {titulo: 'Transportadora Pequeña', precio: 34.99, imagen: 'transportadora.jpg'},
      ]
    },
  ];


}

