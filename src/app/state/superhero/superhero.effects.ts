import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

import { map, mergeMap } from 'rxjs/operators';

import { createEffect, Actions, ofType } from '@ngrx/effects';

import { navigation } from '@nrwl/angular';

import * as SuperheroActions from './superhero.actions';

import { SuperheroesComponent } from 'src/app/superheroes/superheroes.component';
import { SuperheroesService } from './superhero.service';
import { SuperheroComponent } from 'src/app/superhero/superhero.component';

@Injectable()
export class SuperheroesEffects {
    // superheroes$ = createEffect(() => this.actions.pipe(
    //     navigation(SuperheroesComponent, {
    //         run: () => {
    //             return this.superheroesService.getSuperheroes()
    //                 .pipe(map((superheroes) => SuperheroActions.superheroesFetched({ superheroes })));
    //         }
    //     })
    // ));

    // superhero$ = createEffect(() => this.actions.pipe(
    //     navigation(SuperheroComponent, {
    //         run: (r: ActivatedRouteSnapshot) => {
    //             return this.superheroesService.getSuperhero(r.params.id)
    //                 .pipe(map((selectedSuperhero) => SuperheroActions.superheroFetched({ selectedSuperhero })));
    //         }
    //     })
    // ));

    superheroes$ = createEffect(() => this.actions.pipe(
        ofType(SuperheroActions.superheroesFetch),
        mergeMap(() => {
            return this.superheroesService.getSuperheroes()
                .pipe(map((superheroes) => SuperheroActions.superheroesFetchedSuccess({ superheroes })));
        })
    ));

    constructor(
        private readonly actions: Actions,
        private superheroesService: SuperheroesService
    ) {}
}
