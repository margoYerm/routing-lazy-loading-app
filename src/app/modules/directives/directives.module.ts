import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DirectivesComponent } from './directives.component';
import { DirectivesNavComponent } from './shared-components/directives-nav/directives-nav.component';
import { DirectivesRoutingModule } from './directives-routing.module';

import { StyleDirective } from './ng-directives/style.directive';
import { StyleParamsDirective } from './ng-directives/style-params.directive';
import { StyleHostBindingDirective } from './ng-directives/style-host-binding.directive';
import { IfNotDirective } from './ng-directives/ifnot.directive';

import { CreateDirectiveComponent } from './pages/create-directive/create-directive.component';
import { AddingEventsComponent } from './pages/adding-events/adding-events.component';
import { PassingParamsDirectiveComponent } from './pages/passing-params-directive/passing-params-directive.component';
import { CreateStructuralDirectiveComponent } from './pages/create-structural-directive/create-structural-directive.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DirectivesRoutingModule,
  ],
  declarations: [
    StyleDirective,
    StyleParamsDirective,
    StyleHostBindingDirective,
    IfNotDirective,
    DirectivesComponent,
    DirectivesNavComponent,
    CreateDirectiveComponent,
    AddingEventsComponent,
    PassingParamsDirectiveComponent,
    CreateStructuralDirectiveComponent,
  ]
})
export class DirectivesModule { }
