import { Component, OnInit, OnDestroy } from '@angular/core';

import { map } from 'rxjs/operators';

import { Store } from '@ngrx/store';

import { PartialSuperheroesState } from '../state/superhero/superhero.reducer';
import { unloadSelectedSuperhero } from '../state/superhero/superhero.actions';


@Component({
  selector: 'app-superhero',
  templateUrl: './superhero.component.html',
  styleUrls: ['./superhero.component.scss']
})
export class SuperheroComponent implements OnInit, OnDestroy {
  superhero$;

  constructor(private store: Store<PartialSuperheroesState>) {
    this.superhero$ = store.select('superheroes')
      .pipe(map((superheroState) => superheroState.selectedSuperhero));
  }

  ngOnInit() { }

  ngOnDestroy() {
    this.store.dispatch(unloadSelectedSuperhero());
  }

}
