
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/shared/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

const RUTAS_APP: Routes = [
{path: 'home', component:HomeComponent},
{path: 'about', component:AboutComponent},
{path: 'heroes', component:HeroesComponent},
{path: 'heroe/:id', component:HeroeComponent},
{path: 'buscar/:heroe',  component:BuscadorComponent},
{path: '',redirectTo:'home',pathMatch:'full'}, 
/* {path: '**',component: HomeComponent},   */
];

export const APP_ROUTING = RouterModule.forRoot(RUTAS_APP);