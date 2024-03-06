import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    AngularMaterialModule,
    CommonModule,
    CustomerRoutingModule,
    SharedModule
  ]
})
export class CustomerModule { }
