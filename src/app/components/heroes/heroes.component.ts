import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe} from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
   // creamos una propiedad heroes de tipo arreglo vacio

   heroes:Heroe[]=[];

  constructor(private heroesServicios:HeroesService,
     private routes:Router) { }

  ngOnInit() {
    this.heroes=this.heroesServicios.getHeroes();
    console.log(this.heroes);
  }

  verHeroe(idx:number){
    this.routes.navigate(['/heroe',idx]);
    console.log(idx);
  }
}
