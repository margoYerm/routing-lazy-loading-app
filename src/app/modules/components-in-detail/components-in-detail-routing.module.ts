import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsInDetailComponent } from './components-in-detail.component';

const componentsRoutes: Routes = [
  { 
    path: '',
    component: ComponentsInDetailComponent,
    children: [],
   },
];

@NgModule({
  imports: [RouterModule.forChild(componentsRoutes)],
  exports: [RouterModule],
})
export class ComponentsInDetailRoutingModule {}
