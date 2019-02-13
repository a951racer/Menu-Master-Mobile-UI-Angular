import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtcDatePipe } from './utc-date.pipe';
import { MaterialModule } from './material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    UtcDatePipe,
  ],
  exports: [
    UtcDatePipe,
    MaterialModule
  ]
})
export class HelpersModule { }
