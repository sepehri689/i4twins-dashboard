import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'dashboard-main', pathMatch: 'full'},
    {path: '**', redirectTo: '/'},
    {
        path: 'dashboard-main',
        loadComponent: () => import('./modules/dashboard-main/dashboard-main.component').then(m => m.DashboardMainComponent),
        data: {title: 'Main Dashboard', showFooter: true}
    },
];
