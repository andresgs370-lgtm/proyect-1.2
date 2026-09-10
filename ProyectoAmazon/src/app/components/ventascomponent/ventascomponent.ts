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
        {titulo: 'Audífonos Bluetooth', precio: 25.99, imagen: 'assets/auris%20inalambricos.jpg'},
        {titulo: 'Cargador Rápido', precio: 12.50, imagen: 'assets/cargadorrapido.jpg'},
        {titulo: 'Mouse Inalámbrico', precio: 9.99, imagen: 'assets/mouseinalambrico.jpg'},
        {titulo: 'Teclado Mecánico', precio: 34.99, imagen: 'assets/tecladomeca.jpg'},
        {titulo: 'Power Bank 10000mAh', precio: 19.99, imagen: 'assets/bateria1000mah.jpg'},
        {titulo: 'Cámara Web HD', precio: 22.50, imagen: 'assets/camara.jpg'},
        {titulo: 'Parlante Portátil', precio: 18.75, imagen: 'assets/parlante1.jpg'},
        {titulo: 'Smartwatch Básico', precio: 45.00, imagen: 'assets/smart.jpg'},
      ]
    },
    {
      nombre: 'Ropa',
      productos: [
        {titulo: 'Camiseta Básica', precio: 9.99, imagen: 'assets/camisablanca.jpg'},
        {titulo: 'Jean Clásico', precio: 29.99, imagen: 'assets/jean.jpg'},
        {titulo: 'Chaqueta Impermeable', precio: 39.99, imagen: 'assets/chaqueta.jpg'},
        {titulo: 'Gorra Deportiva', precio: 12.00, imagen: 'assets/gorrita.jpg'},
        {titulo: 'Medias Pack x3', precio: 7.50, imagen: 'assets/medias3.jpg'},
        {titulo: 'Sudadera con Capucha', precio: 24.99, imagen: 'assets/buzosaco.jpg'},
        {titulo: 'Cinturón de Cuero', precio: 15.00, imagen: 'assets/correacuero.jpg'},
        {titulo: 'Bufanda de Lana', precio: 10.50, imagen: 'assets/bufanda.jpg'},
      ]
    },
    {
      nombre: 'Hogar',
      productos: [
        {titulo: 'Juego de Sábanas', precio: 22.00, imagen: 'assets/sabanas.jpg'},
        {titulo: 'Set de Toallas', precio: 18.50, imagen: 'assets/toallas.jpg'},
        {titulo: 'Lámpara de Mesa', precio: 16.99, imagen: 'assets/lampara.jpg'},
        {titulo: 'Organizador Multiusos', precio: 9.75, imagen: 'assets/organizador.jpg'},
        {titulo: 'Set de Ollas', precio: 49.99, imagen: 'assets/ollas.jpg'},
        {titulo: 'Cortinas Blackout', precio: 27.00, imagen: 'assets/cortinas.jpg'},
        {titulo: 'Alfombra Antideslizante', precio: 14.25, imagen: 'assets/alfombra.jpg'},
        {titulo: 'Difusor de Aromas', precio: 19.99, imagen: 'assets/difusor.jpg'},
      ]
    },
    {
      nombre: 'Belleza',
      productos: [
        {titulo: 'Crema Hidratante', precio: 14.99, imagen: 'assets/crema.jpg'},
        {titulo: 'Shampoo Reparador', precio: 8.50, imagen: 'assets/shampoo.jpg'},
        {titulo: 'Set de Brochas', precio: 12.99, imagen: 'assets/brochas.jpg'},
        {titulo: 'Perfume 50ml', precio: 32.00, imagen: 'assets/perfume.jpg'},
        {titulo: 'Esmalte de Uñas', precio: 4.50, imagen: 'assets/esmalte.jpg'},
        {titulo: 'Mascarilla Facial', precio: 6.99, imagen: 'assets/facial.jpg'},
        {titulo: 'Secador de Pelo', precio: 28.00, imagen: 'assets/secador.jpg'},
        {titulo: 'Espejo con Luz LED', precio: 17.50, imagen: 'assets/espejo.jpg'},
      ]
    },
    {
      nombre: 'Deportes',
      productos: [
        {titulo: 'Balón de Fútbol', precio: 15.99, imagen: 'assets/balon.jpg'},
        {titulo: 'Yoga Mat', precio: 18.00, imagen: 'assets/yoga.jpg'},
        {titulo: 'Mancuernas 5kg', precio: 22.50, imagen: 'assets/mancuernas.jpg'},
        {titulo: 'Botella Deportiva', precio: 8.00, imagen: 'assets/botella.jpg'},
        {titulo: 'Guantes de Gimnasio', precio: 10.99, imagen: 'assets/guantes.jpg'},
        {titulo: 'Cuerda para Saltar', precio: 6.50, imagen: 'assets/cuerda.jpg'},
        {titulo: 'Banda de Resistencia', precio: 7.99, imagen: 'assets/banda.jpg'},
        {titulo: 'Bicicleta Estática Mini', precio: 65.00, imagen: 'assets/bici.jpg'},
      ]
    },
    {
      nombre: 'Juguetes',
      productos: [
        {titulo: 'Rompecabezas 500pz', precio: 11.99, imagen: 'assets/rompecabezas.jpg'},
        {titulo: 'Carro a Control Remoto', precio: 24.99, imagen: 'assets/carrorc.jpg'},
        {titulo: 'Muñeca Articulada', precio: 16.50, imagen: 'assets/muñeca.jpg'},
        {titulo: 'Set de Bloques', precio: 19.99, imagen: 'assets/bloques.jpg'},
        {titulo: 'Peluche Grande', precio: 14.00, imagen: 'assets/peluche.jpg'},
        {titulo: 'Juego de Mesa Familiar', precio: 21.00, imagen: 'assets/juegomesa.jpg'},
        {titulo: 'Pelota Saltarina', precio: 5.99, imagen: 'assets/pelota.jpg'},
        {titulo: 'Robot Educativo', precio: 39.99, imagen: 'assets/robot.jpg'},
      ]
    },
    {
      nombre: 'Libros',
      productos: [
        {titulo: 'Novela Best Seller', precio: 13.99, imagen: 'assets/novela.jpg'},
        {titulo: 'Libro de Cocina', precio: 17.50, imagen: 'assets/cocina.jpg'},
        {titulo: 'Cuento Infantil', precio: 6.99, imagen: 'assets/cuentos.jpg'},
        {titulo: 'Enciclopedia Ilustrada', precio: 29.99, imagen: 'assets/enciclopedia.jpg'},
        {titulo: 'Diario de Notas', precio: 5.50, imagen: 'assets/diario.jpg'},
        {titulo: 'Libro de Autoayuda', precio: 12.00, imagen: 'assets/autoayuda.jpg'},
        {titulo: 'Cómic Edición Especial', precio: 9.99, imagen: 'assets/comic.jpg'},
        {titulo: 'Agenda Anual', precio: 8.75, imagen: 'assets/agenda.jpg'},
      ]
    },
    {
      nombre: 'Mascotas',
      productos: [
        {titulo: 'Alimento para Perro 3kg', precio: 18.99, imagen: 'assets/alimento.jpg'},
        {titulo: 'Rascador para Gato', precio: 22.00, imagen: 'assets/rascador.jpg'},
        {titulo: 'Correa Ajustable', precio: 9.50, imagen: 'assets/correaajustable.jpg'},
        {titulo: 'Cama para Mascota', precio: 27.99, imagen: 'assets/camamascota.jpg'},
        {titulo: 'Juguete Interactivo', precio: 8.99, imagen: 'assets/jugueteinteractivo.jpg'},
        {titulo: 'Comedero Doble', precio: 11.50, imagen: 'assets/comederodoble.jpg'},
        {titulo: 'Shampoo para Mascotas', precio: 7.25, imagen: 'assets/shampoomascotas.jpg'},
        {titulo: 'Transportadora Pequeña', precio: 34.99, imagen: 'assets/transportadora.jpg'},
      ]
    },
  ];


}

