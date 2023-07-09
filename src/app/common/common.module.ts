import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatSidenavModule } from "@angular/material/sidenav";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";

@NgModule({
    declarations: [],
    imports: [CommonModule, MatSidenavModule, BrowserAnimationsModule, MatCardModule],
    exports: [CommonModule, MatSidenavModule, BrowserAnimationsModule, MatCardModule]
})
export class Common {}
