import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BasicsAndSyntaxRoutingModule } from './basics-and-syntax-routing.module';

import { BasicsAndSyntaxComponent } from './basics-and-syntax.component';
import { BasicsNavComponent } from './shared-components/basics-nav/basics-nav.component';
import { TwoWayBindingComponent } from './pages/two-way-binding/two-way-binding.component';
import { TemplatesStylesComponent } from './pages/templates-styles/templates-styles.component';
import { InterpolationComponent } from './pages/interpolation/interpolation.component';
import { WhatIsBindingComponent } from './pages/what-is-binding/what-is-binding.component';
import { EventBindingComponent } from './pages/event-binding/event-binding.component';
import { NgStyleComponent } from './pages/ng-style/ng-style.component';
import { NgClassDynamicClassesComponent } from './pages/ng-class-dynamic-classes/ng-class-dynamic-classes.component';
import { NgIfElseComponent } from './pages/ng-if-else/ng-if-else.component';
import { NgSwitchComponent } from './pages/ng-switch/ng-switch.component';
import { NgForLoopsComponent } from './pages/ng-for-loops/ng-for-loops.component';
import { WhatIsPipesComponent } from './pages/what-is-pipes/what-is-pipes.component';
import { NavigationMultiComponent } from './shared-components/navigation-multi/navigation-multi.component';





@NgModule({
  imports: [
    CommonModule,    
    BasicsAndSyntaxRoutingModule,    
    FormsModule,   
  ],
  declarations: [    
    BasicsAndSyntaxComponent,
    BasicsNavComponent,
    NavigationMultiComponent,    
    TemplatesStylesComponent,  
    InterpolationComponent, 
    WhatIsBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    NgStyleComponent,
    NgClassDynamicClassesComponent,
    NgIfElseComponent,
    NgSwitchComponent,
    NgForLoopsComponent,
    WhatIsPipesComponent,    
  ],  
})

export class BasicsAndSyntaxModule { }
