import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
    menuItemList: Array<{ title: string; route: string; key: string; icon: string }> = [
        { key: "share_file", title: "Share a file", route: "share", icon: "send" },
        { key: "share_history", title: "History", route: "history", icon: "manage_history" }
    ];
    currentPage: string = "share_file";

    constructor(private router: Router) {}

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.router.navigate(["/share"]);
    }

    getCurrentPageTitle(): string {
        let titleObject = this.menuItemList.find((menuItem) => menuItem.key == this.currentPage);
        return titleObject ? titleObject.title : "";
    }

    handlePageChange(menuItem: { title: string; route: string; key: string; icon: string }): void {
        this.currentPage = menuItem.key;
        this.router.navigate(["/" + menuItem.route]);
    }
}
