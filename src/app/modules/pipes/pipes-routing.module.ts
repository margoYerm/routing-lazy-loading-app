import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PipesComponent } from './pipes.component';

import { PipesNumbersComponent } from './pages/pipes-numbers/pipes-numbers.component';
import { PipesStringsComponent } from './pages/pipes-strings/pipes-strings.component';
import { PipesDateComponent } from './pages/pipes-date/pipes-date.component';
import { PipesRestComponent } from './pages/pipes-rest/pipes-rest.component';
import { PipesCreateComponent } from './pages/pipes-create/pipes-create.component';
import { ListsFilteringComponent } from './pages/lists-filtering/lists-filtering.component';
import { PipeAsyncComponent } from './pages/pipe-async/pipe-async.component';


const pipesRoutes: Routes = [
  { 
    path: '',
    component: PipesComponent,
    children: [
      {
        path: 'pipes-numbers',
        component: PipesNumbersComponent,
      }, 
      {
        path: 'pipes-strings',
        component: PipesStringsComponent,
      }, 
      {
        path: 'pipes-date',
        component: PipesDateComponent,
      },
      {
        path: 'pipes-rest',
        component: PipesRestComponent,
      }, 
      {
        path: 'pipes-create',
        component: PipesCreateComponent,
      },  
      {
        path: 'lists-filtering',
        component: ListsFilteringComponent,
      },   
      {
        path: 'pipe-async',
        component: PipeAsyncComponent,
      },  
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(pipesRoutes)],
  exports: [RouterModule],
})

export class PipesRoutingModule {}