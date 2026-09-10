import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Authservice {
  private nombreUsuarioSubject = new BehaviorSubject<string>('');
  nombreUsuario$ = this.nombreUsuarioSubject.asObservable();

  login(nombre: string) {
    this.nombreUsuarioSubject.next(nombre);
  }

  logout() {
    this.nombreUsuarioSubject.next('');
  }
}
