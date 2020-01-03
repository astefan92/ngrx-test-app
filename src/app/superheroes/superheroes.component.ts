import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Store } from '@ngrx/store';

import * as SuperheroActions from '../state/superhero/superhero.actions';
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

  constructor(private store: Store<PartialSuperheroesState>) {
    this.superheroes$ = store.select('superheroes')
      .pipe(map(superheroesAdapter.getSelectors().selectAll));
    this.loading$ = store.select('superheroes')
      .pipe(map((state) => state.loading));
  }

  ngOnInit() {
    this.store.dispatch(SuperheroActions.superheroesFetch());
  }

}
