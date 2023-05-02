import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppCounterService } from './services-ng/app-counter.service';

import { ServicesComponent } from './services.component';
import { ServicesNavComponent } from './shared-components/services-nav/services-nav.component';
import { ServicesRoutingModule } from './services-routing.module';

import { ServicesCreateComponent } from './pages/services-create/services-create.component';
import { ServicesLocalComponent } from './pages/services-local/services-local.component';
import { ServicesScopeComponent } from './pages/services-local/services-scope/services-scope.component';
import { NestedServicesComponent } from './pages/nested-services/nested-services.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ServicesRoutingModule,
  ],
  declarations: [
    ServicesComponent,
    ServicesNavComponent,
    ServicesCreateComponent,
    ServicesLocalComponent,
    ServicesScopeComponent,
    NestedServicesComponent,
  ],
  providers: [
    AppCounterService,    
  ]
})
export class ServicesModule { }
