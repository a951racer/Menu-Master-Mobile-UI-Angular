import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../interceptors/auth-interceptor';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule} from "@angular/forms";

//import { customHttpProvider } from '../assets/custom-http';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';

import { MaterialModule } from './helpers/material/material.module';
import { HelpersModule } from './helpers/helpers.module';

import { DayModule } from './day/day.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HelpersModule,
    MaterialModule,
    FlexLayoutModule,
    DayModule,
    RouterModule.forRoot(AppRoutes),
  ],
  exports: [

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  entryComponents: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
