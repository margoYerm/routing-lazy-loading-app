import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const mainRoutes: Routes = [
  { path: 'basics-and-syntax', 
    loadChildren: () => 
      import('./modules/basics-and-syntax/basics-and-syntax.module').then(m => 
      m.BasicsAndSyntaxModule) 
  },

  { path: 'components-in-detail', 
    loadChildren: () => 
      import('./modules/components-in-detail/components-in-detail.module').then(m => 
      m.ComponentsInDetailModule) 
  },

  { path: 'directives', 
    loadChildren: () => 
      import('./modules/directives/directives.module').then(m => 
      m.DirectivesModule) 
  },

  { path: 'pipes', 
    loadChildren: () => 
      import('./modules/pipes/pipes.module').then(m => 
      m.PipesModule) 
  },

  { path: 'services', 
    loadChildren: () => 
      import('./modules/services/services.module').then(m => 
      m.ServicesModule) 
  },

  { path: 'forms-and-validation', 
    loadChildren: () => 
      import('./modules/forms-and-validation/forms-and-validation.module').then(m => 
      m.FormsAndValidationModule) 
  }, 

  { path: 'my-http-client', 
    loadChildren: () => 
      import('./modules/my-http-client/my-http-client.module').then(m => 
      m.MyHttpClientModule) 
  },

  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [    
    RouterModule.forRoot(mainRoutes),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule { }
