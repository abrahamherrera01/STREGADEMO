import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { ManagementComponent } from './management/management.component';
import { GraphicsModule } from 'src/app/graphics/graphics.module';
import { MyLeadsComponent } from './my-leads/my-leads.component';
import { MyWalletComponent } from './my-wallet/my-wallet.component';
import { LeadsOrWalletComponent } from './components/leads-or-wallet/leads-or-wallet.component';
import { ProspectInformationComponent } from './prospect-information/prospect-information.component';
import { UpdateLeadInformationComponent } from './components/update-lead-information/update-lead-information.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    ManagementComponent,
    MyLeadsComponent,
    MyWalletComponent,
    LeadsOrWalletComponent,
    ProspectInformationComponent,
    UpdateLeadInformationComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    SharedModule,
    AngularMaterialModule,
    GraphicsModule,
    ReactiveFormsModule
  ]
})
export class ManagerModule { }
