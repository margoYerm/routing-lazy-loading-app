import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicsAndSyntaxComponent } from './basics-and-syntax.component';
import { TemplatesStylesComponent } from './pages/templates-styles/templates-styles.component';
import { InterpolationComponent } from './pages/interpolation/interpolation.component';
import { WhatIsBindingComponent } from './pages/what-is-binding/what-is-binding.component';
import { EventBindingComponent } from './pages/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './pages/two-way-binding/two-way-binding.component';
import { NgStyleComponent } from './pages/ng-style/ng-style.component';

const basicsRoutes: Routes = [
  { 
    path: '',
    component: BasicsAndSyntaxComponent,
    children: [ 
      // {
      //   path: '',
      //   component: BasicsAndSyntaxComponent,
      // },      
      {
        path: 'templates-styles',
        component: TemplatesStylesComponent,
      },      
      {
        path: 'interpolation',
        component: InterpolationComponent,
      },
      {
        path: 'what-is-binding',
        component: WhatIsBindingComponent,
      },
      {
        path: 'event-binding',
        component: EventBindingComponent,
      },
      {
        path: 'two-way-binding',
        component: TwoWayBindingComponent,
      },
      {
        path: 'ng-style',
        component: NgStyleComponent,
      },
      /*{
        path: 'dynamic-classes-ng-class',
        component: DynamicClassesNgClassComponent,
      },
      {
        path: 'dynamic-classes-ng-class',
        component: DynamicClassesNgClassComponent,
      },
      {
        path: 'app-conditional-display-ngif-else',
        component: ConditionalDisplayNgifElseComponent,
      },
      {
        path: 'ng-switch',
        component: NgSwitchComponent,
      },
      {
        path: 'loops-ng-for',
        component: LoopsNgForComponent,
      },
      {
        path: 'what-is-pipes',
        component: WhatIsPipesComponent,
      }, */ 
    ],
   },
];

@NgModule({
  imports:[RouterModule.forChild(basicsRoutes)],
  exports: [RouterModule]
})

export class BasicsAndSyntaxRoutingModule {};
