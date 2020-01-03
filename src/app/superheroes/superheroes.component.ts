import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Store } from '@ngrx/store';

import { superheroesAdapter, PartialSuperheroesState } from '../state/superhero/superhero.reducer';
import { Superhero } from '../state/superhero/superhero.model';

@Component({
  selector: 'app-superheroes',
  templateUrl: './superheroes.component.html',
  styleUrls: ['./superheroes.component.scss']
})
export class SuperheroesComponent implements OnInit {

  superheroes$: Observable<Superhero[]>;
  loading$: Observable<boolean>;

  constructor(store: Store<PartialSuperheroesState>) {
    this.superheroes$ = store.select('superheroes').pipe(map(superheroesAdapter.getSelectors().selectAll));
    // this.superheroes$.subscribe();
  }

  ngOnInit() {}

}
