
import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { superheroes } from './superhero.data';

@Injectable({providedIn: 'root'})
export class SuperheroesService {
    constructor() {}

    getSuperheroes() {
        return of(superheroes).pipe(delay(1000));
    }

    getSuperhero(id: string | number) {
        const sHero = superheroes.find(s => +s.id === +id);

        return of(sHero).pipe(delay(1000));
    }

}
