import { Component } from '@angular/core';

@Component({
  selector: 'app-musicacomponent',
  standalone: false,
  styleUrl: './musicacomponent.css',
  templateUrl: './musicacomponent.html',
})
export class Musicacomponent {


  canciones: any[] = [
    { titulo: 'DtMF', artista: 'Bad Bunny', portada: 'https://images.genius.com/66f08db4c1d9d323ab441ab6c04a034a.1000x1000x1.png', audio: '' },
    { titulo: 'Tu carcel', artista: 'Los enanitos verdes', portada: 'https://i.scdn.co/image/ab67616d0000b27326ef97df3a0f945ef7809702', audio: 'https://open.spotify.com/track/1lAFWiaVhJhvQ5Gtzp6vSu?si=aaebe11ad4644d66' },
    { titulo: 'Por si mañana no estoy', artista: 'Omar Courtz', portada: 'https://images.genius.com/f201d42444f05535e679524c12538736.1000x1000x1.png', audio: '' },
    { titulo: 'Pasajero', artista: 'Mora', portada: 'https://i.scdn.co/image/ab67616d0000b2736f78adeb660b81a1c286a64f', audio: '' },
    { titulo: 'Runaway  ', artista: 'Kanye West 🐐', portada: 'https://i1.sndcdn.com/artworks-HHnlgS9e9jF4cG6K-KpubYA-t1080x1080.png', audio: '' },
    { titulo: 'Tus vueltas', artista: 'Milo J', portada: 'https://i.scdn.co/image/ab67616d00001e02d4e2dc1a0cd59790ec3f91af', audio: '' },
    { titulo: 'Un deseo', artista: 'Mora', portada: 'https://i.scdn.co/image/ab67616d0000b2736f78adeb660b81a1c286a64f', audio: '' },
    { titulo: 'Harley Quinn', artista: 'Fuerza Regida', portada: 'https://i.scdn.co/image/ab67616d0000b273ad57982065339f7dc2058efe', audio: '' },

  ];

  reproducir(elementoAudio: HTMLAudioElement): void {
    if (elementoAudio.paused) {
      elementoAudio.play();
    } else {
      elementoAudio.pause();
    }
  }
}

