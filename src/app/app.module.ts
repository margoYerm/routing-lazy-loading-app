import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { MainNavComponent } from './shared-components/main-nav/main-nav.component';
import { BasicsAndSyntaxModule } from './modules/basics-and-syntax/basics-and-syntax.module';
import { ComponentsInDetailModule } from './modules/components-in-detail/components-in-detail.module';
import { DirectivesModule } from './modules/directives/directives.module';
import { PipesModule } from './modules/pipes/pipes.module';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,    
  ],
  imports: [
    BrowserModule,    
    AppRoutingModule,
    CommonModule,
    FormsModule,    
    ReactiveFormsModule,
    BasicsAndSyntaxModule,
    ComponentsInDetailModule,
    DirectivesModule,
    PipesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
