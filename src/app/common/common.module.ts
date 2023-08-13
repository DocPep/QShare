// modules
import { NgModule } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { CommonModule } from "@angular/common";
import { MatListModule } from "@angular/material/list";
import { MatCheckboxModule } from "@angular/material/checkbox";
// components
import { SpinnerComponent } from "./spinner/spinner.component";

@NgModule({
    declarations: [SpinnerComponent],
    imports: [MatSidenavModule, MatCardModule, MatProgressSpinnerModule, CommonModule, MatListModule, MatCheckboxModule],
    exports: [SpinnerComponent, MatSidenavModule, MatCardModule, MatProgressSpinnerModule, CommonModule, MatListModule, MatCheckboxModule],
})
export class Common {}
