import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicsAndSyntaxComponent } from './basics-and-syntax.component';
import { TemplatesStylesComponent } from './pages/templates-styles/templates-styles.component';
import { InterpolationComponent } from './pages/interpolation/interpolation.component';
import { WhatIsBindingComponent } from './pages/what-is-binding/what-is-binding.component';
import { EventBindingComponent } from './pages/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './pages/two-way-binding/two-way-binding.component';
import { NgStyleComponent } from './pages/ng-style/ng-style.component';
import { NgClassDynamicClassesComponent } from './pages/ng-class-dynamic-classes/ng-class-dynamic-classes.component';
import { NgIfElseComponent } from './pages/ng-if-else/ng-if-else.component';
import { NgSwitchComponent } from './pages/ng-switch/ng-switch.component';
import { NgForLoopsComponent } from './pages/ng-for-loops/ng-for-loops.component';
import { WhatIsPipesComponent } from './pages/what-is-pipes/what-is-pipes.component';
import { NavigationMultiComponent } from './shared-components/navigation-multi/navigation-multi.component';


const basicsRoutes: Routes = [
  { 
    path: '',
    component: BasicsAndSyntaxComponent,
    children: [            
      {
        path: '', 
        component: NavigationMultiComponent,
      },   
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
      {
        path: 'ng-class-dynamic-classes',
        component: NgClassDynamicClassesComponent,
      },
      {
        path: 'ng-if-else',
        component: NgIfElseComponent,
      },
      
      {
        path: 'ng-switch',
        component: NgSwitchComponent,
      },
      {
        path: 'ng-for-loops',
        component: NgForLoopsComponent,
      },
      {
        path: 'what-is-pipes',
        component: WhatIsPipesComponent,
      },
      
      // {
      //   path: '/:id',
      //   component: NavCardComponent,
      // }
    ],
   },
];

@NgModule({
  imports:[RouterModule.forChild(basicsRoutes)],
  exports: [RouterModule]
})

export class BasicsAndSyntaxRoutingModule {};
