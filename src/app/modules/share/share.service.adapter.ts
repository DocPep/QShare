import { invoke } from "@tauri-apps/api";
import { ShareComponent } from "./share.component";

export default class ShareServiceAdapter {
    vm: ShareComponent;
    constructor(vm: ShareComponent) {
        this.vm = vm;
    }
    async initializeData() {
        this.vm.isLoading = true;
        this.vm.currentDirectory = await this.getHomeDirectory();
        this.vm.directoryNavigationStack.push(this.vm.currentDirectory);
        let result = await Promise.all([this.getCurrentDirectory()]);
        this.vm.directoryData = result[0];
        this.vm.shareStatusList = new Array<boolean>(result[0].length).fill(false);
        this.vm.isLoading = false;
    }

    async getCurrentDirectory(): Promise<Array<[string, boolean]>> {
        let result = await invoke<string>("generic_handler", {
            args: ["list_directory", this.vm.currentDirectory],
        }).then((response): Array<[string, boolean]> => JSON.parse(JSON.stringify(response)));
        result.sort((a: [string, boolean], b: [string, boolean]) => {
            return b[0].localeCompare(a[0]);
        });
        result.sort((a: [string, boolean], b: [string, boolean]) => {
            return a[1] ? -1 : 1;
        });
        return result;
    }
    async getHomeDirectory(): Promise<string> {
        let result: string = await invoke<string>("generic_handler", {
            args: ["get_home_directory"],
        });
        return result;
    }
    async isPathValid(path: string): Promise<boolean> {
        return await invoke<boolean>("generic_handler", {
            args: ["is_path_valid", path],
        });
    }
}
