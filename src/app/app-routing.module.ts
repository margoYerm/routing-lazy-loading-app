import { NgModule } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared-components/error-page/error-page.component';

const mainRoutes: Routes = [
  { path: 'basics-and-syntax', 
    title: 'Basics and syntax module',
    loadChildren: () => 
      import('./modules/basics-and-syntax/basics-and-syntax.module').then(m => 
      m.BasicsAndSyntaxModule) 
  },

  { path: 'components-in-detail', 
    title: 'Components in details module',
    loadChildren: () => 
      import('./modules/components-in-detail/components-in-detail.module').then(m => 
      m.ComponentsInDetailModule) 
  },

  { path: 'directives', 
    title: 'Directives module',
    loadChildren: () => 
      import('./modules/directives/directives.module').then(m => 
      m.DirectivesModule) 
  },

  { path: 'pipes', 
    title: 'Pipes module',
    loadChildren: () => 
      import('./modules/pipes/pipes.module').then(m => 
      m.PipesModule) 
  },

  { path: 'services', 
    title: 'Services module',
    loadChildren: () => 
      import('./modules/services/services.module').then(m => 
      m.ServicesModule) 
  },

  { path: 'forms-and-validation', 
    title: 'Forms and validations module',
    loadChildren: () => 
      import('./modules/forms-and-validation/forms-and-validation.module').then(m => 
      m.FormsAndValidationModule) 
  }, 

  { path: 'my-http-client', 
    title: 'HTTP client module',
    loadChildren: () => 
      import('./modules/my-http-client/my-http-client.module').then(m => 
      m.MyHttpClientModule) 
  },  

  { path: 'my-routing', 
    title: 'My routing module',
    loadChildren: () => 
      import('./modules/my-routing/my-routing.module').then(m => 
      m.MyRoutingModule) 
  },  

  {
    path: '',
    redirectTo: '/basics-and-syntax',
    pathMatch: 'full'
  },  

  {
    path: '**',
    component: ErrorPageComponent,     
  }
];

@NgModule({
  imports: [    
    RouterModule.forRoot(mainRoutes,
      {preloadingStrategy: PreloadAllModules}), 
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule { }
