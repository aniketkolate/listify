import { Routes } from '@angular/router';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardHomeComponent },
];
