import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];

  constructor(public _heroesService: HeroesService, public router: Router) {
    //console.log('CONSTRUCTOR');
  }

  ngOnInit(): void {
    //console.log('ngOnInit');
    this.heroes = this._heroesService.getHeroes();
    //console.log(this.heroes);
  }

  verHeroe(index: number) {
    this.router.navigate(['/heroe', index]);
  }
}