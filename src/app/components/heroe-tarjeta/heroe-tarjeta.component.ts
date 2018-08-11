import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe:any= {};
  @Input() indice:number;
  @Output() heroeseleccionado: EventEmitter<number>;
  constructor(private routes:Router) { 
    this.heroeseleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroe() {
   // this.routes.navigate(['/heroe',this.indice]);
   this.heroeseleccionado.emit(this.indice);
   }

}

