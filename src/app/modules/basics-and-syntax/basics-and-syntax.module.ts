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




@NgModule({
  imports: [
    CommonModule,    
    BasicsAndSyntaxRoutingModule,    
    FormsModule,   
  ],
  declarations: [    
    BasicsAndSyntaxComponent,
    BasicsNavComponent,
    TemplatesStylesComponent,  
    InterpolationComponent, 
    WhatIsBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    NgStyleComponent,

  ]
})

export class BasicsAndSyntaxModule { }
