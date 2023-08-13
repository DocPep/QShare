import { Component, OnInit } from "@angular/core";
import ShareServiceAdapter from "./share.service.adapter";

@Component({
    selector: "app-share",
    templateUrl: "./share.component.html",
    styleUrls: ["./share.component.css"],
})
export class ShareComponent implements OnInit {
    isLoading: boolean = true;
    directoryData: Array<[string, boolean]> = [];
    directoryNavigationStack: Array<string> = ["/home/"];
    currentDirectory: string = "/home/";
    serviceAdapter!: ShareServiceAdapter;
    shareStatusList: Array<boolean> = [];
    ngOnInit(): void {
        this.serviceAdapter = new ShareServiceAdapter(this);
        this.serviceAdapter.initializeData();
    }

    async toggleShare(index: number): Promise<void> {
        this.shareStatusList[index] = !this.shareStatusList[index];
    }

    async navigateDirectory(directory: string): Promise<void> {
        this.isLoading = true;
        this.currentDirectory = directory;
        this.directoryNavigationStack.push(directory);
        let result = await this.serviceAdapter.getCurrentDirectory();
        this.directoryData = result;
        this.shareStatusList = new Array<boolean>(result.length).fill(false);
        this.isLoading = false;
    }
    async popDirectory(): Promise<void> {
        this.isLoading = true;
        this.directoryNavigationStack.pop();
        this.currentDirectory = this.directoryNavigationStack.at(-1)!;
        let result = await this.serviceAdapter.getCurrentDirectory();
        this.directoryData = result;
        this.shareStatusList = new Array<boolean>(result.length).fill(false);
        this.isLoading = false;
    }

    processTitle(title: string): string | undefined {
        let tokens = title.split("/");
        return tokens.at(-1)?.toString();
    }
}
