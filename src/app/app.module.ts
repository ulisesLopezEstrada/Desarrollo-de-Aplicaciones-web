import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/shared/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';


// Rutas
import { APP_ROUTING } from './app.routes';
// Servicios
import { HeroesService } from './servicios/heroes.service';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';

import { CarouselModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { HeroinasComponent } from './components/heroinas/heroinas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscadorComponent,
    HeroeTarjetaComponent,
    CarruselComponent,
    HeroinasComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    CarouselModule.forRoot(),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
