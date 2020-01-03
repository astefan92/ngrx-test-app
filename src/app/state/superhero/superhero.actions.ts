import { createAction, props } from '@ngrx/store';

import { Superhero } from './superhero.model';

export const superheroesFetch = createAction(
    '[Superheroes] Superheroes Fetch'
);

export const superheroesFetchedSuccess = createAction(
    '[Superheroes] Superheroes Fetched Success',
    props<{ superheroes: Superhero[]; }>()
);

export const superheroesFetchedError = createAction(
    '[Superheroes] Superheroes Fetched Error'
);

export const superheroFetch = createAction(
    '[Superheroes] Superhero Fetch'
);

export const superheroFetchedSuccess = createAction(
    '[Superhero] Superhero Fetched Success',
    props<{ selectedSuperhero: Superhero }>()
);

export const superheroFetchedError = createAction(
    '[Superheroes] Superhero Fetched Error'
);

export const unloadSelectedSuperhero = createAction(
    '[Superhero] Unload Selected Superhero'
);
