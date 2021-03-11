import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  heroes: string [] = ['Spiderman', 'Iroman' , 'Hulk', 'Antman'];
  heroeBorrado = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  borrarHereo(): void {
    this.heroeBorrado = this.heroes.shift() || '' ;
  }
}
