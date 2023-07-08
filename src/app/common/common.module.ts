import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Events } from './events/events.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Events
  ],
  exports: []
})
export class Common extends Events { 
  constructor() {
    super();
  }
}
