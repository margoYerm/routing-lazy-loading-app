import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PipesComponent } from './pipes.component';
import { PipesNavComponent } from './shared-components/pipes-nav/pipes-nav.component';
import { PipesRoutingModule } from './pipes-routing.module';
import { MultByPipe } from './pipes-ng/mult-by.pipe';
import { ExMarksPipe } from './pipes-ng/ex-marks.pipe';
import { FilterPipe } from './pipes-ng/filter.pipe';

import { PipesNumbersComponent } from './pages/pipes-numbers/pipes-numbers.component';
import { PipesStringsComponent } from './pages/pipes-strings/pipes-strings.component';
import { PipesDateComponent } from './pages/pipes-date/pipes-date.component';
import { PipesRestComponent } from './pages/pipes-rest/pipes-rest.component';
import { PipesCreateComponent } from './pages/pipes-create/pipes-create.component';
import { ListsFilteringComponent } from './pages/lists-filtering/lists-filtering.component';
import { PipeAsyncComponent } from './pages/pipe-async/pipe-async.component';


@NgModule({
  imports: [
    CommonModule,
    PipesRoutingModule,  
    FormsModule,  
  ],
  declarations: [
    PipesComponent,
    PipesNavComponent,
    MultByPipe,
    ExMarksPipe, 
    FilterPipe, 
    PipesNumbersComponent, 
    PipesStringsComponent, 
    PipesDateComponent,
    PipesRestComponent,
    PipesCreateComponent,
    ListsFilteringComponent,
    PipeAsyncComponent,
  ]
})
export class PipesModule { }
