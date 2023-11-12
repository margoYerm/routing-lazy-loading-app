import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyRoutingRoutingModule } from './my-routing-routing.module';
import { MyRoutingComponent } from './my-routing.component';
import { MyRoutingNavComponent } from './shared-components/my-routing-nav/my-routing-nav.component';
import { AuthButtonsComponent } from './shared-components/auth-buttons/auth-buttons.component';
import { PostsComponent } from './pages/posts/posts.component';
import { PostService } from './services/posts.service';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { DescriptionComponent } from './pages/description/description.component';
import { PostComponent } from './pages/post/post.component';

@NgModule({
  imports: [
    CommonModule,
    MyRoutingRoutingModule,    
  ],
  declarations: [
    MyRoutingComponent,
    MyRoutingNavComponent,
    AuthButtonsComponent,
    DescriptionComponent,
    PostsComponent,
    HomeComponent,
    AboutComponent,
    PostComponent,    
  ],
  providers: [
    PostService,
  ]
})
export class MyRoutingModule { }
