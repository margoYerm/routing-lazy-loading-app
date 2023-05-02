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
