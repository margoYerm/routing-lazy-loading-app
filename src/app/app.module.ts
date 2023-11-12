import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MainNavComponent } from './shared-components/main-nav/main-nav.component';
import { ErrorPageComponent } from './shared-components/error-page/error-page.component';
import { ModalService } from './services/modal.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,  
    ErrorPageComponent,      
  ],
  imports: [
    BrowserModule,    
    AppRoutingModule,
    CommonModule,
    FormsModule,    
    ReactiveFormsModule, 
    HttpClientModule,
  ],
  exports: [],
  providers: [
    ModalService,    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
