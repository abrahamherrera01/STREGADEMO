import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementComponent } from './management/management.component';

const routes: Routes = [
  { path: 'dashboard', 
    component: DashboardComponent, 
    children: [
      { path: '', component: ManagementComponent },
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
