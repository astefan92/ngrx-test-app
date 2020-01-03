import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuperheroComponent } from './superhero/superhero.component';
import { SuperheroesComponent } from './superheroes/superheroes.component';

const routes: Routes = [
  { path: '', redirectTo: '/superheroes', pathMatch: 'full' },
  {
      path: 'superheroes/:id',
      component: SuperheroComponent
  },
  {
    path: 'superheroes',
    component: SuperheroesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
