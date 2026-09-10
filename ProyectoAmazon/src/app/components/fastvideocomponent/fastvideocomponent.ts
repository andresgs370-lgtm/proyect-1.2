import { Component } from '@angular/core';

@Component({
  selector: 'app-fastvideocomponent',
  standalone: false,
  styleUrl: './fastvideocomponent.css',
  templateUrl: './fastvideocomponent.html',
})
export class Fastvideocomponent {

  destacadas: any[] = [
    { titulo: 'Hombre parecido a mario que no es mario', genero: 'Suspenso', anio: 2023, portada: 'assets/meme_12.jpg' },
    { titulo: 'Risitas', genero: 'Aventura', anio: 2023, portada: 'assets/meme_13.jpg' },
    { titulo: 'Down 2 el regreso de un ', genero: 'Romance', anio: 2019, portada: 'assets/meme_14.jpg' },
    { titulo: 'Sexfflix', genero: 'Drama', anio: 2001, portada: 'assets/meme_15.jpg' },
    { titulo: 'Rana que vio la nota de nosotros', genero: 'Drama', anio: 1950, portada: 'assets/meme_16.jpg' },
  ];

  peliculas: any[] = [
    { titulo: 'Dogue one', genero: 'Acción', anio: 2023, portada: 'assets/meme1.jpg' },
    { titulo: 'Gemelos la ultima chanza', genero: 'Drama', anio: 2022, portada: 'assets/meme_2.jpg' },
    { titulo: 'Hombre verde de amor', genero: 'Suspenso', anio: 2021, portada: 'assets/meme_3.jpg' },
    { titulo: 'Reflexion en el rio Bogota', genero: 'Comedia', anio: 2024, portada: 'assets/meme_4.jpg' },
    { titulo: 'Justin beaber love', genero: 'Ciencia Ficción', anio: 2020, portada: 'assets/meme_5.jpg' },
    { titulo: 'Down historia de un', genero: 'Aventura', anio: 2023, portada: 'assets/meme_6.jpg' },
    { titulo: 'Encontrando mi lado Osoma', genero: 'Romance', anio: 2019, portada: 'assets/meme_7.jpg' },
    { titulo: 'Indios super fuertes', genero: 'Terror', anio: 2022, portada: 'assets/meme_8.jpg' },
    { titulo: 'Indio enamorao', genero: 'Fantasía', anio: 2021, portada: 'assets/meme_9.jpg' },
    { titulo: 'Indios super fuertes Origenes 1999', genero: 'Acción', anio: 2024, portada: 'assets/meme_10.jpg' },
    { titulo: 'Negritos chocuanos', genero: 'Drama', anio: 2020, portada: 'assets/meme_11.jpg' },
    { titulo: 'Hombre parecido a mario que no es mario por temas de derechos pero se parece a mario ', genero: 'Suspenso', anio: 2023, portada: 'assets/meme_12.jpg' },
  ];
}
