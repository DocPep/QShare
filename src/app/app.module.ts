import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing";
import { Common } from "./common/common.module";
import { Events } from "./common/events.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserAnimationsModule, BrowserModule, AppRoutingModule, Common],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule extends Events {
    constructor() {
        super();
    }
}
