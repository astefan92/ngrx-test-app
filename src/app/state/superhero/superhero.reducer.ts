import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as SuperheroActions from './superhero.actions';
import { Superhero } from './superhero.model';

export interface SuperheroesState extends EntityState<Superhero> {
    selectedSuperhero: Superhero;
    loading: boolean;
}

export interface PartialSuperheroesState {
    readonly ['superheroes']: SuperheroesState;
}

export const superheroesAdapter: EntityAdapter<Superhero> = createEntityAdapter<Superhero>();

export const initialState: SuperheroesState = superheroesAdapter.getInitialState({
    selectedSuperhero: null,
    loading: false
});

const superheroesReducer = createReducer(
    initialState,
    on(SuperheroActions.superheroesFetch, (state) => ({
        ...state,
        loading: true
    })),
    on(SuperheroActions.superheroesFetchedSuccess, (state, { superheroes }) => {
        const sState = superheroesAdapter.addAll(superheroes, state);
        return {
            ...sState,
            loading: false
        };
    }),
    on(SuperheroActions.superheroFetchedSuccess, (state, { selectedSuperhero }) => ({
        ...state,
        selectedSuperhero
    })),
    on(SuperheroActions.unloadSelectedSuperhero, (state) => ({
        ...state,
        selectedSuperhero: null
    }))
);

export function reducer(state: SuperheroesState | undefined, action: Action) {
    return superheroesReducer(state, action);
}
