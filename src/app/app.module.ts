import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../interceptors/auth-interceptor';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { AppService } from './app.service';

import { MaterialModule } from './helpers/material/material.module';
import { HelpersModule } from './helpers/helpers.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HelpersModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(AppRoutes),
  ],
  exports: [

  ],
  providers: [
    AppService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  entryComponents: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
