import {Component} from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.componente.html'
})
export class HeroeComponent{

  nombre = 'Iroman';
  edad = 45;

  obtenerNomnre(): string {
    return `${this.nombre} - ${this.edad}`;
  }


  get nombreCapitalizado(): string {
     return this.nombre.toUpperCase();
  }

  cambiarNombre(): void {
    this.nombre = 'Spiderman';
  }
  cambiarEdad(): void {
    this.edad = 30;
  }

}
