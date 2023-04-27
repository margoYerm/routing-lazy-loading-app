import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectivesComponent } from './directives.component';
import { CreateDirectiveComponent } from './pages/create-directive/create-directive.component';
import { AddingEventsComponent } from './pages/adding-events/adding-events.component';
import { PassingParamsDirectiveComponent } from './pages/passing-params-directive/passing-params-directive.component';
import { CreateStructuralDirectiveComponent } from './pages/create-structural-directive/create-structural-directive.component';


const directivesRoutes: Routes = [
  { 
    path: '',
    component: DirectivesComponent,
    children: [
      {
        path: 'create-directive',
        component: CreateDirectiveComponent,
      }, 
      {
        path: 'adding-events',
        component: AddingEventsComponent,
      }, 
      {
        path: 'passing-params-directive',
        component: PassingParamsDirectiveComponent,
      },
      {
        path: 'create-structural-directive',
        component: CreateStructuralDirectiveComponent,
      },      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(directivesRoutes)],
  exports: [RouterModule],
})

export class DirectivesRoutingModule {}
