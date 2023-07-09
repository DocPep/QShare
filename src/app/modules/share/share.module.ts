import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareRoutingModule } from './share.routing';
import { ShareComponent } from './share.component';


@NgModule({
  declarations: [ShareComponent],
  imports: [
    CommonModule,
    ShareRoutingModule
  ],
  bootstrap: [ShareComponent]
})
export class ShareModule { }
