import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

// to be added
// import { PageNotFoundComponent } from './';

const routes: Routes = [
    {
        path: "",
        children: [
            { path: "share", loadChildren: () => import("src/app/modules/share/share.module").then((module) => module.ShareModule) },
            { path: "history", loadChildren: () => import("src/app/modules/history/history.module").then((module) => module.HistoryModule) }
        ]
    }
    // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
