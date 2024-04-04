import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { customerGuard } from './auth/guards/customer.guard';
import { salesExecutiveGuard } from './auth/guards/sales-executive.guard';
import { managerGuard } from './auth/guards/manager.guard';
import { administratorGuard } from './auth/guards/administrator.guard';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'customer', loadChildren: () => import('./users/customer/customer.module').then(m => m.CustomerModule), canActivate: [customerGuard] },
  { path: 'sales-executive', loadChildren: () => import('./users/sales-executive/sales-executive.module').then(m => m.SalesExecutiveModule), canActivate: [salesExecutiveGuard] },
  { path: 'manager', loadChildren: () => import('./users/manager/manager.module').then(m => m.ManagerModule), canActivate: [managerGuard] },
  { path: 'administrator', loadChildren: () => import('./users/administrator/administrator.module').then(m => m.AdministratorModule), canActivate: [administratorGuard] },
  { path: 'clients', loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule) },
  { path: 'general-report', loadChildren: () => import('./general-report/general-report.module').then(m => m.GeneralReportModule) },
  { path: '**', redirectTo: 'auth' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
