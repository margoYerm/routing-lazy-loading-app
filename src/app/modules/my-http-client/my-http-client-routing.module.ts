import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyHttpClientComponent } from './my-http-client.component';
import { AcquisitionDataComponent } from './pages/acquisition-data/acquisition-data.component';

const httpClientRoutes: Routes = [
    { 
      path: '',
      component: MyHttpClientComponent,
      children: [
        {
          path: 'my-http-client',
          component: AcquisitionDataComponent,
        }, 
        /*{
          path: 'custom-ng-model',
          component: CustomNgModelComponent,
        },  */          
      ],
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(httpClientRoutes)],
    exports: [RouterModule],
  })
  
  export class MyHttpClientRoutingModule {}