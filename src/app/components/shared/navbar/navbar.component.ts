import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  buscarHeroe(heroe:string){
    //obtengo el nombre del heroe a buscar
    console.log(heroe);
    this.router.navigate(['/buscar',heroe])
  }


}
