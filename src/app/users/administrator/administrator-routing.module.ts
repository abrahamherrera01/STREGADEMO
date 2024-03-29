import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementComponent } from './management/management.component';
import { LoadLeadsAndWalletComponent } from './load-leads-and-wallet/load-leads-and-wallet.component';
import { ManageLeadsComponent } from './manage-leads/manage-leads.component';
import { ManageWalletComponent } from './manage-wallet/manage-wallet.component';
import { ManageManagersComponent } from './manage-managers/manage-managers.component';
import { ManageSalesExecutivesComponent } from './manage-sales-executives/manage-sales-executives.component';

const routes: Routes = [
  { path: 'dashboard', 
    component: DashboardComponent, 
    children: [
      { path: '', component: ManagementComponent },
      { path: 'load-leads-and-wallet', component: LoadLeadsAndWalletComponent },
      { path: 'manage-leads', component: ManageLeadsComponent },
      { path: 'manage-wallet', component: ManageWalletComponent },
      { path: 'manage-managers', component: ManageManagersComponent },
      { path: 'manage-sales-executives', component: ManageSalesExecutivesComponent },
      { path: '', redirectTo: '', pathMatch: 'full' }
    ]
  },    
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministratorRoutingModule { }
