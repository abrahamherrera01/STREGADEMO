import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementComponent } from './management/management.component';
import { MyLeadsComponent } from './my-leads/my-leads.component';
import { MyWalletComponent } from './my-wallet/my-wallet.component';
import { ProspectInformationComponent } from './prospect-information/prospect-information.component';

const routes: Routes = [
  { path: 'dashboard', 
    component: DashboardComponent, 
    children: [
      { path: '', component: ManagementComponent },      
      { path: 'my-leads', component: MyLeadsComponent },      
      { path: 'my-leads/prospect-information/:prospect_id', component: ProspectInformationComponent },      
      { path: 'my-wallet', component: MyWalletComponent },      
      { path: '', redirectTo: '', pathMatch: 'full' }
    ]
  },    
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
