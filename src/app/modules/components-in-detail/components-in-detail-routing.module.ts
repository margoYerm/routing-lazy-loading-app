import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsInDetailComponent } from './components-in-detail.component';
import { CreateComponentsComponent } from './pages/create-components/create-components.component';
import { InteractionOfComponentsComponent } from './pages/interaction-of-components/interaction-of-components.component';
import { LifecycleHooksComponent } from './pages/lifecycle-hooks/lifecycle-hooks.component';
import { ChangeDetectionStrategyComponent } from './pages/change-detection-strategy/change-detection-strategy.component';
import { ViewEncapsulationComponent } from './pages/view-encapsulation/view-encapsulation.component';

const componentsRoutes: Routes = [
  { 
    path: '',
    component: ComponentsInDetailComponent,
    children: [
      {
        path: '', //create-components
        component: CreateComponentsComponent,
      }, 
      {
        path: 'create-components', //
        component: CreateComponentsComponent,
      }, 
      {
        path: 'interaction-of-components',
        component: InteractionOfComponentsComponent,
      }, 
      {
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
      }
    ],
   },
];

@NgModule({
  imports: [RouterModule.forChild(componentsRoutes)],
  exports: [RouterModule],
})
export class ComponentsInDetailRoutingModule {}
