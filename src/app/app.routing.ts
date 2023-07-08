import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';

// to be added
// import { PageNotFoundComponent } from './';

const routes: Routes = [
    { path: '', component: AppComponent },
    // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}