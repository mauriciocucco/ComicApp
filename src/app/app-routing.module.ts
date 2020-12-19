import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent }, // /home
  { path: 'about', component: AboutComponent }, // /about
  { path: 'heroes', component: HeroesComponent }, // /heroes
  { path: 'heroe/:id', component: HeroeComponent }, // /heroe single
  { path: 'search/:termino', component: SearchComponent }, //buscador
  { path: '**', pathMatch: 'full', redirectTo: 'home' }, //es la ruta a la que se va a dirigir si no encuentra otra previamente
];

@NgModule({
  imports: [RouterModule.forRoot(routes /*{ useHash: true }*/)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
