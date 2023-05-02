import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ServicesComponent } from "./services.component";

import { ServicesCreateComponent } from "./pages/services-create/services-create.component";
import { ServicesLocalComponent } from "./pages/services-local/services-local.component";
import { NestedServicesComponent } from "./pages/nested-services/nested-services.component";


const servicesRoutes: Routes = [
    { 
      path: '',
      component: ServicesComponent,
      children: [
        {
          path: 'services-create',
          component: ServicesCreateComponent,
        }, 
        {
          path: 'services-local',
          component: ServicesLocalComponent,
        }, 
        {
          path: 'nested-services',
          component: NestedServicesComponent,
        },        
      ],
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(servicesRoutes)],
    exports: [RouterModule],
  })
  
  export class ServicesRoutingModule {}