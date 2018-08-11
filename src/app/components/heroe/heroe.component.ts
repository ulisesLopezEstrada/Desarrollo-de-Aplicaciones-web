import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

heroe:any = {};
   
  constructor(private activatedRoute: ActivatedRoute,
              private heroesServicio:HeroesService) { }

  ngOnInit() {
    //observador
    this.activatedRoute.params.subscribe ( params =>{
      /* console.log(params);
      console.log(params['id']); */
      this.heroe = this.heroesServicio.getHeroe(params['id']);
      console.log(this.heroe);
    });
  }

}
