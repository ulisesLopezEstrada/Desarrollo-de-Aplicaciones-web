import { Injectable } from '@angular/core';

export interface Heroe{
  nombre: string;
  bio:string;
  img:string;
  aparicion:string;
  casa: string;
  idx?:number;
}


@Injectable({
  providedIn: 'root'
})
export class HeroinasService {

  public heroes:Heroe[]= [
    { nombre: "Aquaman",
      bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
      img: "assets/img/aquaman2.jpg",
      aparicion: "1941-11-01",
      casa:"DC"
    }];

  constructor() { }
}
