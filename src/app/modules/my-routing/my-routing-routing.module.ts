import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { MyRoutingComponent } from "./my-routing.component";
import { PostsComponent } from "./pages/posts/posts.component";
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { DescriptionComponent } from "./pages/description/description.component";
import { PostComponent } from "./pages/post/post.component";
import { AuthGuard, AuthGuardChild  } from "src/app/auth.guard";

const myRoutingRoutes: Routes = [
    { 
      path: '',
      component: MyRoutingComponent,    
      children: [                
        {
          path: '', 
          component: HomeComponent,          
        }, 
        {
          path: 'home', 
          component: HomeComponent,          
        }, 
        {
          path: 'about',
          component: AboutComponent,
          canActivateChild: [AuthGuardChild],
          children: [
            {
              path: 'description',
              component: DescriptionComponent,
            }
          ]          
        }, 
        {
          path: 'posts', 
          component: PostsComponent,
          canActivate: [AuthGuard],
        },   
        {
          path: 'posts/:id',
          component: PostComponent
        }     
      ],
     },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(myRoutingRoutes)],
    exports: [RouterModule],
  })
  export class MyRoutingRoutingModule {}