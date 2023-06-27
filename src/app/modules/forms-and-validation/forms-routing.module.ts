import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsAndValidationComponent } from './forms-and-validation.component';
import { CreateFormComponent } from './pages/create-form/create-form.component';
import { CustomNgModelComponent } from './pages/custom-ng-model/custom-ng-model.component';

const formsRoutes: Routes = [
    { 
      path: '',
      component: FormsAndValidationComponent,
      children: [
        {
          path: '',
          component: CreateFormComponent,
        }, 
        {
          path: 'create-form',
          component: CreateFormComponent,
        }, 
        {
          path: 'custom-ng-model',
          component: CustomNgModelComponent,
        },            
      ],
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(formsRoutes)],
    exports: [RouterModule],
  })
  
  export class FormsRoutingModule {}