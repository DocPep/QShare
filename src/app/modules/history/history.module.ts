import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HistoryComponent } from "./history.component";
import { HistoryRoutingModule } from "./history.routing";

@NgModule({
    declarations: [HistoryComponent],
    imports: [CommonModule, HistoryRoutingModule],
    bootstrap: [HistoryComponent]
})
export class HistoryModule {}
