import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {

  constructor() { }

  myInterval = 1500;
  activeSlideIndex = 0;
  slides = [
    {image: 'assets/galeria/x-men_1.jpg',text: 'Esto es un demo de un carrusel'},
    {image: 'assets/galeria/1.jpg',text: 'Esto es un demo de un carrusel'},
    {image: 'assets/galeria/2.jpg',text: 'Esto es un demo de un carrusel'},
    {image: 'assets/galeria/3.jpg',text: 'Esto es un demo de un carrusel'},
    {image: 'assets/galeria/7.jpg',text: 'Esto es un demo de un carrusel'},
    {image: 'assets/galeria/8.jpg',text: 'Esto es un demo de un carrusel'}
    
  ];

  ngOnInit() {
  }

}
