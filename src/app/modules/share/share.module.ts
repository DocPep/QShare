import { NgModule } from '@angular/core';
import { ShareRoutingModule } from './share.routing';
import { ShareComponent } from './share.component';
import { Common } from 'src/app/common/common.module';

@NgModule({
  declarations: [ShareComponent],
  imports: [
    ShareRoutingModule,
    Common
  ],
  bootstrap: [ShareComponent]
})
export class ShareModule { }
