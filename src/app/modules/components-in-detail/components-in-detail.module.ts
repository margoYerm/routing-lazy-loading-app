import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsInDetailRoutingModule } from './components-in-detail-routing.module';
import { ComponentsInDetailComponent } from './components-in-detail.component';
import { CidNavComponent } from './shared-components/cid-nav/cid-nav.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsInDetailRoutingModule,
  ],
  declarations: [
    ComponentsInDetailComponent,
    CidNavComponent,
  ]
})
export class ComponentsInDetailModule { }
