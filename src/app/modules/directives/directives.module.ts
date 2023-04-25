import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesComponent } from './directives.component';
import { DirectivesNavComponent } from './shared-components/directives-nav/directives-nav.component';

import { CreateDirectiveComponent } from './pages/create-directive/create-directive.component';
import { ElementAccessComponent } from './pages/element-access/element-access.component';
import { DirectivesRoutingModule } from './directives-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DirectivesRoutingModule,
  ],
  declarations: [
    DirectivesComponent,
    DirectivesNavComponent,
    CreateDirectiveComponent,
    ElementAccessComponent,
  ]
})
export class DirectivesModule { }
