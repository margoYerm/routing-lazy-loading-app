import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormsAndValidationComponent } from './forms-and-validation.component';
import { FormsNavComponent } from './shared-components/forms-nav/forms-nav.component';
import { CreateFormComponent } from './pages/create-form/create-form.component';
import { FormsRoutingModule } from './forms-routing.module';
import { CustomNgModelComponent } from './pages/custom-ng-model/custom-ng-model.component';
import { SwitchNestedComponent } from './pages/custom-ng-model/switch-nested/switch-nested.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,  
    FormsRoutingModule,  
  ],

  declarations: [
    FormsAndValidationComponent,       
    FormsNavComponent,
    CreateFormComponent,
    CustomNgModelComponent,
    SwitchNestedComponent,
  ]
})
export class FormsAndValidationModule { }
