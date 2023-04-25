import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectivesComponent } from './directives.component';
import { CreateDirectiveComponent } from './pages/create-directive/create-directive.component';
import { ElementAccessComponent } from './pages/element-access/element-access.component';

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
        path: 'element-access',
        component: ElementAccessComponent,
      }, 
      /*{
        path: 'lifecycle-hooks',
        component: LifecycleHooksComponent,
      },
      {
        path: 'change-detection-strategy',
        component: ChangeDetectionStrategyComponent,
      },
      {
        path: 'view-encapsulation',
        component: ViewEncapsulationComponent,
      }*/
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(directivesRoutes)],
  exports: [RouterModule],
})

export class DirectivesRoutingModule {}
