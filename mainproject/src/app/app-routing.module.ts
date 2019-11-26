import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FulllayoutComponent } from './fulllayout/fulllayout.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
    {
        path: '',
        component: LoginComponent, pathMatch: "full"

    },
    {
        path: 'dashboard',
        component: FulllayoutComponent,
        children: [
            {
                path: '',
                redirectTo: "dashboard",
                pathMatch: "full"
            },
            {
                path: '',
                component: DashboardComponent
            },

        ]
    },
    {
        path: '', component: FulllayoutComponent,
        children: [
            {
                path: 'masters', loadChildren: './modules/master.module#MastersModule'
            },
            {
                path: 'donations', loadChildren: './modules/donation.module#DonationsModule'
            }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }