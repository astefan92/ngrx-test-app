import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { MaterialModule } from './material-module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SuperheroComponent } from './superhero/superhero.component';
import { SuperheroesComponent } from './superheroes/superheroes.component';

import { SuperheroesEffects } from './state/superhero/superhero.effects';
import * as fromSuperheroes from './state/superhero/superhero.reducer';
import { NxModule } from '@nrwl/angular';

@NgModule({
  declarations: [
    AppComponent,
    SuperheroComponent,
    SuperheroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule.forRoot({}, {
      metaReducers: [],
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreModule.forFeature('superheroes', fromSuperheroes.reducer),
    StoreRouterConnectingModule.forRoot(),
    NxModule.forRoot(),
    EffectsModule.forRoot([SuperheroesEffects])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
