import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministratorRoutingModule } from './administrator-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { ManagementComponent } from './management/management.component';
import { GraphicsModule } from 'src/app/graphics/graphics.module';
import { LoadLeadsAndWalletComponent } from './load-leads-and-wallet/load-leads-and-wallet.component';
import { LoadCsvComponent } from './components/load-csv/load-csv.component';
import { ManageLeadsComponent } from './manage-leads/manage-leads.component';
import { ManageLeadsOrWalletComponent } from './components/manage-leads-or-wallet/manage-leads-or-wallet.component';
import { ManageWalletComponent } from './manage-wallet/manage-wallet.component';
import { ManageManagersComponent } from './manage-managers/manage-managers.component';
import { AddManagerComponent } from './components/add-manager/add-manager.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,    
    ManagementComponent, LoadLeadsAndWalletComponent, LoadCsvComponent, ManageLeadsComponent, ManageLeadsOrWalletComponent, ManageWalletComponent, ManageManagersComponent, AddManagerComponent
  ],
  imports: [
    CommonModule,
    AdministratorRoutingModule,
    SharedModule,
    AngularMaterialModule,
    GraphicsModule,
    ReactiveFormsModule
  ]
})
export class AdministratorModule { }
