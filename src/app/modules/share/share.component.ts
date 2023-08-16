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
    directoryNavigationStack: Array<string> = [];
    currentDirectory: string = "";
    serviceAdapter!: ShareServiceAdapter;
    isHiddenVisible: boolean = false;
    // list of checkboxes
    shareStatusList: Array<boolean> = [];
    shareStatusCount: number = 0;
    ngOnInit(): void {
        this.serviceAdapter = new ShareServiceAdapter(this);
        this.serviceAdapter.initializeData();
    }

    async toggleShare(index: number): Promise<void> {
        this.shareStatusList[index] = !this.shareStatusList[index];
        this.shareStatusCount += this.shareStatusList[index] ? 1 : -1;
    }

    async navigateDirectory(directory: string): Promise<void> {
        this.isLoading = true;
        this.currentDirectory = directory;
        this.directoryNavigationStack.push(directory);
        let result = await this.serviceAdapter.getCurrentDirectory();
        this.directoryData = result;
        this.shareStatusList = new Array<boolean>(result.length).fill(false);
        this.shareStatusCount = 0;
        this.isLoading = false;
    }
    async popDirectory(): Promise<void> {
        this.isLoading = true;
        this.directoryNavigationStack.pop();
        this.currentDirectory = this.directoryNavigationStack.at(-1)!;
        let result = await this.serviceAdapter.getCurrentDirectory();
        this.directoryData = result;
        this.shareStatusList = new Array<boolean>(result.length).fill(false);
        this.shareStatusCount = 0;
        this.isLoading = false;
    }

    processTitle(title: string): string | undefined {
        let tokens = title.split("/");
        return tokens.at(-1)?.toString();
    }

    async pushCustomPath(event: any) : Promise<void> {
        this.isLoading = true;
        event.preventDefault();
        event.target['path'].blur();
        if (await this.serviceAdapter.isPathValid(event.target['path'].value)) {
            this.navigateDirectory(event.target['path'].value);
        } else {
            event.target['path'].value = this.directoryNavigationStack.at(-1);
            this.isLoading = false;
            alert("Invalid path");
        }
    }
}
