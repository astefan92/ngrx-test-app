import { createAction, props } from '@ngrx/store';

import { Superhero } from './superhero.model';

export const superheroesFetched = createAction(
    '[Superheroes] Superheroes Fetched',
    props<{ superheroes: Superhero[]; }>()
);

export const superheroFetched = createAction(
    '[Superhero] Superhero Fetched',
    props<{ selectedSuperhero: Superhero }>()
);

export const unloadSelectedSuperhero = createAction(
    '[Superhero] Unload Selected Superhero'
);
