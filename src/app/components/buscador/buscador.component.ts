import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

   heroes:any[]=[];
   termino:string;
  constructor(private activateRoute:ActivatedRoute,
              private heroesService:HeroesService,
              private router: Router
              ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe (params =>{
     // console.log(params['heroe']);
     // esto es para poner el heroe a buscar en el html
      this.termino = params['heroe'];
      this.heroes = this.heroesService.buscarHeroes( params['heroe']);
      console.log(this.heroes);
    });

  }
  verHeroe( idx:number){

    this.router.navigate(['/heroe',idx]);
    
    }
}
