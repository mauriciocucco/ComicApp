import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  heroesEncontrados: Heroe[] = [];
  termino: String = '';

  constructor(
    public _heroesService: HeroesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.heroesEncontrados = this._heroesService.buscarHeroes(params.termino);
      //console.log(this.heroesEncontrados);
      this.termino = params.termino;
    });
  }
}
