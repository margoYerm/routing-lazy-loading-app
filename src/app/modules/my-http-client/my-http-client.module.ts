import { NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { MyHttpClientComponent } from './my-http-client.component';
import { MyHttpClientNavComponent } from './shared-components/my-http-client-nav/my-http-client-nav.component';
import { MyHttpClientRoutingModule } from './my-http-client-routing.module';

import { AcquisitionDataComponent } from './pages/acquisition-data/acquisition-data.component';
import { AuthInterceptor } from './services/auth.interceptor';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true,
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MyHttpClientRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    MyHttpClientComponent,
    MyHttpClientNavComponent,
    AcquisitionDataComponent,
  ],
  providers: [
    INTERCEPTOR_PROVIDER,
  ]
})
export class MyHttpClientModule { }
