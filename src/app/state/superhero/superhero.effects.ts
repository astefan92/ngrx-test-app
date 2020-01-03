import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

import { map } from 'rxjs/operators';

import { createEffect, Actions } from '@ngrx/effects';

import { navigation } from '@nrwl/angular';

import * as SuperheroActions from './superhero.actions';

import { SuperheroesComponent } from 'src/app/superheroes/superheroes.component';
import { SuperheroesService } from './superhero.service';

@Injectable()
export class SuperheroesEffects {
    superheroes$ = createEffect(() => this.actions.pipe(
        navigation(SuperheroesComponent, {
            run: (r: ActivatedRouteSnapshot) => {
                return this.superheroesService.getSuperheroes()
                    .pipe(map((superheroes) => SuperheroActions.superheroesFetched({ superheroes })));
            }
        })
    ));

    constructor(
        private readonly actions: Actions,
        private superheroesService: SuperheroesService
    ) {}
}
