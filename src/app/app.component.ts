import { Component, OnInit } from "@angular/core";
import { invoke } from "@tauri-apps/api/tauri";
import { UnlistenFn, emit, listen } from "@tauri-apps/api/event";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
    greetingMessage = "";
    listener: UnlistenFn | null = null;
    ngOnInit() {
      
    }

    greet(event: SubmitEvent, name: string): void {
        event.preventDefault();
        // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
        invoke<string>("greet", { name }).then((text) => {
            this.greetingMessage = text;
        });
    }
}
