import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsInDetailRoutingModule } from './components-in-detail-routing.module';
import { ComponentsInDetailComponent } from './components-in-detail.component';
import { CidNavComponent } from './shared-components/cid-nav/cid-nav.component';
import { CreateComponentsComponent } from './pages/create-components/create-components.component';
import { InteractionOfComponentsComponent } from './pages/interaction-of-components/interaction-of-components.component';
import { PostFormComponent } from './pages/interaction-of-components/post-form/post-form.component';
import { PostComponent } from './pages/interaction-of-components/post/post.component';
import { FormsModule } from '@angular/forms';
import { LifecycleHooksComponent } from './pages/lifecycle-hooks/lifecycle-hooks.component';
import { ChildComponentComponent } from './pages/lifecycle-hooks/child-component/child-component.component';
import { ChangeDetectionStrategyComponent } from './pages/change-detection-strategy/change-detection-strategy.component';
import { ChildDetectionStrategyComponent } from './pages/change-detection-strategy/child-detection-strategy/child-detection-strategy.component';
import { ViewEncapsulationComponent } from './pages/view-encapsulation/view-encapsulation.component';
import { ChildViewEncapsulationComponent } from './pages/view-encapsulation/child-view-encapsulation/child-view-encapsulation.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsInDetailRoutingModule,
    FormsModule,
  ],
  declarations: [
    ComponentsInDetailComponent,
    CidNavComponent,
    CreateComponentsComponent,
    InteractionOfComponentsComponent,
    PostFormComponent,
    PostComponent,
    LifecycleHooksComponent,
    ChildComponentComponent,
    ChangeDetectionStrategyComponent,
    ChildDetectionStrategyComponent,
    ViewEncapsulationComponent,
    ChildViewEncapsulationComponent,
  ]
})
export class ComponentsInDetailModule { }
