import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Authservice } from '../../service/authservice';

@Component({
  selector: 'app-logincomponent',
  standalone: false,
  styleUrl: './logincomponent.css',
  templateUrl: './logincomponent.html',
})
export class Logincomponent {
  correo: string = "";
  contrasena: string = "";
  msg: string = "";
  estilo: string = "text-danger";

  constructor(private router: Router, private authService: Authservice) {}

  condicionaLogin(): void {
    this.msg = "";

    if (this.correo === "" && this.contrasena === "") {
      this.msg = "No ha ingresado ningún dato";
    } else if (this.correo === "usuariofast@gmail.com" && this.contrasena === "usuarioAdmin") {
      this.authService.login("Usuario de prueba");
      this.router.navigate(['/']);
    } else if (this.correo !== "usuariofast@gmail.com") {
      this.msg = "Usuario no encontrado";
    } else if (this.contrasena !== "usuarioAdmin") {
      this.msg = "La contraseña no es correcta";
    }
  }
}
