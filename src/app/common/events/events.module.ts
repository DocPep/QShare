import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { listen } from "@tauri-apps/api/event";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [Events]
})
export class Events {
    // event handlers
    aboutEvent(event: any) : void {
        console.log(`Use this to find the file: ${event.payload}`);
        alert("Native about button was clicked");
    }
    fileEvent(event: any) : void {
        console.log(`Use this to find the file: ${event.payload}`);
        alert("Native file button was clicked");
    }
    helpEvent(event: any) : void {
        console.log(`Use this to find the file: ${event.payload}`);
        alert("Native help button was clicked");
    }
    // add events listeners
    constructor() {
        listen<string>("file", this.fileEvent);
    }
}
