import { Component, OnInit } from '@angular/core';
import { Authservice } from '../../service/authservice';

@Component({
  selector: 'app-navbarcomponent',
  standalone: false,
  styleUrl: './navbarcomponent.css',
  templateUrl: './navbarcomponent.html',
})
export class Navbarcomponent implements OnInit {
  nombreUsuario: string = '';

  constructor(private authService: Authservice) {}

  ngOnInit() {
    this.authService.nombreUsuario$.subscribe(nombre => {
      this.nombreUsuario = nombre;
    });
  }
}
