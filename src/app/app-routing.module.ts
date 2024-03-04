import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'customer', loadChildren: () => import('./users/customer/customer.module').then(m => m.CustomerModule) },
  { path: 'sales-executive', loadChildren: () => import('./users/sales-executive/sales-executive.module').then(m => m.SalesExecutiveModule) },
  { path: 'manager', loadChildren: () => import('./users/manager/manager.module').then(m => m.ManagerModule) },
  { path: 'administrator', loadChildren: () => import('./users/administrator/administrator.module').then(m => m.AdministratorModule) },
  { path: 'clients', loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule) },
  { path: '**', redirectTo: 'auth' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
