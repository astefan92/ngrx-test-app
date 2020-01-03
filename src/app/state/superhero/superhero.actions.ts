import { createAction, props } from '@ngrx/store';

import { Superhero } from './superhero.model';

export const superheroesFetched = createAction(
    '[Superheroes] Superheroes Fetched',
    props<{ superheroes: Superhero[]; }>()
);
