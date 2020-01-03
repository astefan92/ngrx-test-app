import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as SuperheroActions from './superhero.actions';
import { Superhero } from './superhero.model';

export interface SuperheroesState extends EntityState<Superhero> {}

export interface PartialSuperheroesState {
    readonly ['superheroes']: SuperheroesState;
}

export const superheroesAdapter: EntityAdapter<Superhero> = createEntityAdapter<Superhero>();

export const initialState: SuperheroesState = superheroesAdapter.getInitialState({});

const superheroesReducer = createReducer(
    initialState,
    on(SuperheroActions.superheroesFetched, (state, { superheroes }) => superheroesAdapter.addAll(superheroes, state))
);

export function reducer(state: SuperheroesState | undefined, action: Action) {
    return superheroesReducer(state, action);
}
